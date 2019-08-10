// system includes
#include <fstream>
#include <iostream>
#include <sstream>
extern "C" {
    #include <sys/stat.h>
    #include <libgen.h>
    #include <unistd.h>
    #include <glib.h>
}

// library includes
#include <QApplication>
#include <QCommandLineParser>
#include <QDir>
#include <QDirIterator>
#include <QFile>
#include <QFileDialog>
#include <QFileInfo>
#include <QPushButton>
#include <QMessageBox>
#include <QRegularExpression>
#include <QString>
extern "C" {
    #include <appimage/appimage.h>
}

// local headers
#include "shared.h"

// Runs an AppImage. Returns suitable exit code for main application.
int runAppImage(const QString& pathToAppImage, int argc, char** argv) {
    // needs to be converted to std::string to be able to use c_str()
    // when using QString and then .toStdString().c_str(), the std::string instance will be an rvalue, and the
    // pointer returned by c_str() will be invalid
    auto x = pathToAppImage.toStdString();
    auto fullPathToAppImage = QFileInfo(pathToAppImage).absoluteFilePath().toStdString();

    if (appimage_get_type(fullPathToAppImage.c_str(), false) < 2) {
        QMessageBox::critical(
            nullptr,
            "AppImageLauncher error",
            "AppImageLauncher does not support type 1 AppImages at the moment."
        );
        return 1;
    }

    // first of all, chmod +x the AppImage file, otherwise execv() will complain
    if (!makeExecutable(fullPathToAppImage)) {
        QMessageBox::critical(nullptr, "Error", QString::fromStdString("Could not make AppImage executable: " + fullPathToAppImage));
        return 1;
    }

    // build path to AppImage runtime
    // as it might error, check before fork()ing to be able to display an error message beforehand
    auto exeDir = QFileInfo(QFile("/proc/self/exe").symLinkTarget()).absoluteDir().absolutePath();

    // use external runtime _without_ magic bytes to run the AppImage
    // the original idea was to use /lib64/ld-linux-x86_64.so to run AppImages, but it did complain about some
    // violated ELF data, and refused to run the AppImage
    // alternatively, the AppImage would have to be mounted by this application, and AppRun would need to be called
    // however, this requires some process management (e.g., killing all processes inside the AppImage and also
    // the FUSE "mount" process, when this application is killed...)
    setenv("TARGET_APPIMAGE", fullPathToAppImage.c_str(), true);

    // first attempt: find runtime in expected installation directory
    auto pathToRuntime = exeDir.toStdString() + "/../lib/appimagelauncher/runtime";

    // next method: find runtime in expected build location
    if (!QFile(QString::fromStdString(pathToRuntime)).exists()) {
        pathToRuntime = exeDir.toStdString() + "/../lib/AppImageKit/src/runtime";
    }

    // if it can't be found in either location, display error and exit
    if (!QFile(QString::fromStdString(pathToRuntime)).exists()) {
        QMessageBox::critical(nullptr, "Error", QString::fromStdString("runtime not found: no such file or directory: " + pathToRuntime));
        return 1;
    }

    // need a char pointer instead of a const one, therefore can't use .c_str()
    std::vector<char> fullPathToAppImageBuf(pathToRuntime.size() + 1, '\0');
    strcpy(fullPathToAppImageBuf.data(), pathToRuntime.c_str());

    std::vector<char*> args;
    args.push_back(fullPathToAppImageBuf.data());

    // copy arguments
    for (int i = 1; i < argc; i++) {
        args.push_back(argv[i]);
    }

    // args need to be null terminated
    args.push_back(nullptr);

    execv(pathToRuntime.c_str(), args.data());

    const auto& error = errno;
    std::cout << "execv() failed: " << strerror(error) << std::endl;
}

int main(int argc, char** argv) {
    QApplication app(argc, argv);
    app.setApplicationDisplayName("AppImageLauncher");

    std::ostringstream version;
    version << "version " << APPIMAGELAUNCHER_VERSION << " "
            << "(git commit " << APPIMAGELAUNCHER_GIT_COMMIT << "), built on "
            << APPIMAGELAUNCHER_BUILD_DATE;
    app.setApplicationVersion(QString::fromStdString(version.str()));

    std::ostringstream usage;
    usage << "Usage: " << argv[0] << " [options] <path>" << std::endl
          << "Desktop integration helper for AppImages, for use by Linux distributions." << std::endl
          << std::endl
          << "Options:" << std::endl
          << "  --appimagelauncher-help     Display this help and exit" << std::endl
          << "  --appimagelauncher-version  Display version and exit" << std::endl
          << std::endl
          << "Arguments:"
          << "  path                        Path to AppImage (mandatory)" << std::endl;

    auto displayVersion = [&app]() {
        std::cerr << "AppImageLauncher " << app.applicationVersion().toStdString() << std::endl;
    };

    // display usage and exit if path to AppImage is missing
    if (argc <= 1) {
        displayVersion();
        std::cerr << std::endl;
        std::cerr << usage.str();
        return 1;
    }

    // search for appimagelauncher arguments in args list
    for (int i = 0; i < argc; i++) {
        QString arg = argv[i];

        // reserved argument space
        const QString prefix = "--appimagelauncher-";

        if (arg.startsWith(prefix)) {
            if (arg == prefix + "help") {
                displayVersion();
                std::cerr << std::endl;
                std::cerr << usage.str();
                return 0;
            } else if (arg == prefix + "version") {
                displayVersion();
                return 0;
            } else {
                std::cerr << "Unknown AppImageLauncher option: " << arg.toStdString() << std::endl;
                return 1;
            }
        }
    }

    auto pathToAppImage = QString(argv[1]);

    if (!QFile(pathToAppImage).exists()) {
        std::cout << "Error: no such file or directory: " << pathToAppImage.toStdString() << std::endl;
        return 1;
    }

    const auto type = appimage_get_type(pathToAppImage.toStdString().c_str(), false);

    if (type <= 0 || type > 2) {
        QMessageBox::critical(nullptr, "AppImageLauncher error", "Not an AppImage: " + pathToAppImage);
        return 1;
    }

    // check for X-AppImage-Integrate=false
    if (appimage_shall_not_be_integrated(pathToAppImage.toStdString().c_str()))
        return runAppImage(pathToAppImage, argc, argv);

    if (type == 1) {
        QMessageBox::critical(
            nullptr,
            "AppImageLauncher error",
            "AppImageLauncher does not support type 1 AppImages at the moment."
        );
        return 1;
    }

    auto integratedAppImagesDestination = QString(getenv("HOME")) + "/.bin/";

    auto pathToIntegratedAppImage = integratedAppImagesDestination + basename(const_cast<char*>(pathToAppImage.toStdString().c_str()));

    // AppImages in AppImages are not supposed to be integrated
    if (pathToAppImage.startsWith("/tmp/.mount_"))
        return runAppImage(pathToAppImage, argc, argv);

    // check whether AppImage has been integrated
    if (appimage_is_registered_in_system(pathToAppImage.toStdString().c_str()))
        return runAppImage(pathToAppImage, argc, argv);

    // ignore terminal apps (fixes #2)
    if (appimage_is_terminal_app(pathToAppImage.toStdString().c_str()))
        return runAppImage(pathToAppImage, argc, argv);

    // type 2 specific checks
    if (type == 2) {
        // check parameters
        {
            for (int i = 0; i < argc; i++) {
                QString arg = argv[i];

                // reserved argument space
                const QString prefix = "--appimage-";

                if (arg.startsWith(prefix)) {
                    // don't annoy users who try to mount or extract AppImages
                    if (arg == prefix + "mount" || arg == prefix + "extract") {
                        return runAppImage(pathToAppImage, argc, argv);
                    }
                }
            }
        }
    }

    std::ostringstream explanationStrm;
    explanationStrm << "Integrating it will move the AppImage into a predefined location, "
                    << "and include it in your application launcher." << std::endl
                    << std::endl
                    << "To remove or update the AppImage, please use the context menu of the application icon in "
                    << "your task bar or launcher." << std::endl
                    << std::endl
                    << "The directory the integrated AppImages are stored in is currently set to:" << std::endl
                    << integratedAppImagesDestination.toStdString() << std::endl;

    auto explanation = explanationStrm.str();

    std::ostringstream messageStrm;
    messageStrm << pathToAppImage.toStdString() << " "
                << QObject::tr("has not been integrated into your system.").toStdString() << "\n\n"
                << QObject::tr(explanation.c_str()).toStdString();

    QMessageBox messageBox(
        QMessageBox::Question,
        "Desktop Integration",
        QString::fromStdString(messageStrm.str())
    );

    auto* okButton = messageBox.addButton("Integrate and run", QMessageBox::AcceptRole);
    auto* runOnceButton = messageBox.addButton("Run once", QMessageBox::ApplyRole);

    // *whyever* Qt somehow needs a button with "RejectRole" or the X button won't close the current window...
    auto* cancelButton = messageBox.addButton("Cancel", QMessageBox::RejectRole);
    // ... but it is fine to hide that button after creating it, so it's not displayed
    cancelButton->hide();

    messageBox.setDefaultButton(QMessageBox::Ok);

    messageBox.exec();

    const auto* clickedButton = messageBox.clickedButton();

    if (clickedButton == okButton) {
        if (!integrateAppImage(pathToAppImage, pathToIntegratedAppImage))
            return 1;
        return runAppImage(pathToIntegratedAppImage, argc, argv);
    } else if (clickedButton == runOnceButton) {
        return runAppImage(pathToAppImage, argc, argv);
    } else if (clickedButton == cancelButton) {
        return 0;
    }

    // _should_ be unreachable
    return 1;
}

