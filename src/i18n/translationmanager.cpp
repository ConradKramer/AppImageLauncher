// library headers
#include <QDebug>
#include <QDir>
#include <QLibraryInfo>
#include <QString>

// local headers
#include "translationmanager.h"

TranslationManager::TranslationManager(QCoreApplication& app) : app(app) {
    // set up translations
    auto qtTranslator = new QTranslator();
    qtTranslator->load("qt_" + QLocale::system().name(), QLibraryInfo::location(QLibraryInfo::TranslationsPath));
    app.installTranslator(qtTranslator);

    const auto systemLocale = QLocale::system().name();

    // we're using primarily short names for translations, so we should load these translations as well
    const auto shortSystemLocale = systemLocale.split('_')[0];

    const auto translationDir = getTranslationDir();

    auto myappTranslator = new QTranslator();
    myappTranslator->load(translationDir + "/ui." + systemLocale + ".qm");
    myappTranslator->load(translationDir + "/ui." + shortSystemLocale + ".qm");
    app.installTranslator(myappTranslator);

    // store translators in list so they won't be deleted
    installedTranslators.push_back(qtTranslator);
    installedTranslators.push_back(myappTranslator);
}

TranslationManager::~TranslationManager() {
    for (auto& translator : installedTranslators) {
        delete translator;
        translator = nullptr;
    }
}

QString TranslationManager::getTranslationDir() {
    // first we need to find the translation directory
    // if this is run from the build tree, we try a path that can only work within the build directory
    // then, we try the expected install location relative to the main binary
    const auto binaryDirPath = QApplication::applicationDirPath();

    // previously the path to the repo root dir was embedded to allow for finding the compiled translations
    // this lead to irreproducible builds
    // therefore the files are now generated within the build dir, and we guess the path based on the binary location
    auto translationDir = binaryDirPath + "/../../i18n/generated/l10n";

    // our helper tools are not shipped in usr/bin but usr/lib/<arch>-linux-gnu/appimagelauncher
    // therefore we need to check for the translations directory relative to this directory as well
    // as <arch-linux-gnu> may not be used in the path, we also check for its parent directory
    if (!QDir(translationDir).exists()) {
        translationDir = binaryDirPath + "/../../share/appimagelauncher/l10n";
    }
    if (!QDir(translationDir).exists()) {
        translationDir = binaryDirPath + "/../../../share/appimagelauncher/l10n";
    }

    // this directory should work for the main application in usr/bin
    if (!QDir(translationDir).exists()) {
        translationDir = binaryDirPath + "/../share/appimagelauncher/l10n";
    }

    // give the user (and dev) some feedback whether the translations could actually be found or not
    if (!QDir(translationDir).exists()) {
        qWarning() << "[AppImageLauncher] Warning:"
                   << "Translation directory could not be found, translations are likely not available";
    }

    return translationDir;
}
