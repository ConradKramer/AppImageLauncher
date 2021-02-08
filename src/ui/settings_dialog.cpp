// libraries
#include <QDebug>
#include <QFileDialog>
#include <QFileIconProvider>
#include <QStringListModel>

// local
#include "settings_dialog.h"
#include "ui_settings_dialog.h"
#include "shared.h"

SettingsDialog::SettingsDialog(QWidget* parent) :
        QDialog(parent),
        ui(new Ui::SettingsDialog) {
    ui->setupUi(this);

    ui->applicationsDirLineEdit->setPlaceholderText(integratedAppImagesDestination().absolutePath());

    loadSettings();

// cosmetic changes in lite mode
#ifdef BUILD_LITE
    ui->checkBoxEnableDaemon->setChecked(true);
    ui->checkBoxEnableDaemon->setEnabled(false);

    ui->checkBoxAskMove->setChecked(false);
    ui->checkBoxAskMove->setEnabled(false);
#endif

    connect(ui->buttonBox, &QDialogButtonBox::accepted, this, &SettingsDialog::onDialogAccepted);
    connect(ui->chooseAppsDirToolButton, &QToolButton::released, this, &SettingsDialog::onChooseAppsDirClicked);
    connect(ui->additionalDirsAddButton, &QToolButton::released, this, &SettingsDialog::onAddDirectoryToWatchButtonClicked);

    QStringList availableFeatures;

#ifdef ENABLE_UPDATE_HELPER
    availableFeatures << "<span style='color: green;'>✔</span> " + tr("updater available for AppImages supporting AppImageUpdate");
#else
    availableFeatures << "<span style='color: red;'>🞬</span> " + tr("updater unavailable");
#endif

#ifdef BUILD_LITE
    availableFeatures << "<br /><br />"
                      << tr("<strong>Note: this is an AppImageLauncher Lite build, only supports a limited set of features</strong><br />"
                            "Please install the full version via the provided native packages to enjoy the full AppImageLauncher experience");
#endif

    ui->featuresLabel->setText(availableFeatures.join('\n'));
}

SettingsDialog::~SettingsDialog() {
    delete ui;
}

void SettingsDialog::addDirectoryToWatchToListView(const QString& dirPath) {
    const QDir dir(dirPath);

    // we don't want to redundantly add the main integration directory
    if (dir == integratedAppImagesDestination())
        return;

    QIcon icon;

    auto findIcon = [](const std::initializer_list<QString>& names) {
        for (const auto& i : names) {
            auto icon = QIcon::fromTheme(i);

            if (!icon.isNull())
                return icon;
        }
    };

    if (dir.exists()) {
        icon = findIcon({"folder"});
    } else {
        // TODO: search for more meaningful icon, "remove" doesn't really show the directory is missing
        icon = findIcon({"remove"});
    }

    if (icon.isNull()) {
        qDebug() << "item icon unavailable, using fallback";
    }

    auto* item = new QListWidgetItem(icon, dirPath);
    ui->additionalDirsListWidget->addItem(item);
}

void SettingsDialog::loadSettings() {
    settingsFile = getConfig();

    if (settingsFile) {
        ui->daemonIsEnabledCheckBox->setChecked(settingsFile->value("AppImageLauncher/enable_daemon", false).toBool());
        ui->askMoveCheckBox->setChecked(settingsFile->value("AppImageLauncher/ask_to_move", false).toBool());
        ui->applicationsDirLineEdit->setText(settingsFile->value("AppImageLauncher/destination").toString());

        const auto additionalDirsPath = settingsFile->value("appimagelauncherd/additional_directories_to_watch", "").toString();
        for (const auto& dirPath : additionalDirsPath.split(":")) {
            addDirectoryToWatchToListView(dirPath);
        }
    }
}

void SettingsDialog::onDialogAccepted() {
    saveSettings();
    toggleDaemon();
}

void SettingsDialog::saveSettings() {
    createConfigFile(ui->askMoveCheckBox->isChecked(),
                     ui->applicationsDirLineEdit->text(),
                     ui->daemonIsEnabledCheckBox->isChecked());

    settingsFile = getConfig();
}

void SettingsDialog::toggleDaemon() {
    // assumes defaults if config doesn't exist or lacks the related key(s)
    if (settingsFile) {
        if (settingsFile->value("AppImageLauncher/enable_daemon", false).toBool()) {
            system("systemctl --user enable appimagelauncherd.service");
            system("systemctl --user start  appimagelauncherd.service");
        } else {
            system("systemctl --user disable appimagelauncherd.service");
            system("systemctl --user stop    appimagelauncherd.service");
        }
    }
}

void SettingsDialog::onChooseAppsDirClicked() {
    QFileDialog fileDialog(this);

    fileDialog.setFileMode(QFileDialog::DirectoryOnly);
    fileDialog.setWindowTitle(tr("Select Applications directory"));
    fileDialog.setDirectory(integratedAppImagesDestination().absolutePath());

    // Gtk+ >= 3 segfaults when trying to use the native dialog, therefore we need to enforce the Qt one
    // See #218 for more information
    fileDialog.setOption(QFileDialog::DontUseNativeDialog, true);

    if (fileDialog.exec()) {
        QString dirPath = fileDialog.selectedFiles().first();
        ui->applicationsDirLineEdit->setText(dirPath);
    }
}

void SettingsDialog::onAddDirectoryToWatchButtonClicked() {
    QFileDialog fileDialog(this);

    fileDialog.setFileMode(QFileDialog::DirectoryOnly);
    fileDialog.setWindowTitle(tr("Select additional directory to watch"));
    fileDialog.setDirectory(integratedAppImagesDestination().absolutePath());

    // Gtk+ >= 3 segfaults when trying to use the native dialog, therefore we need to enforce the Qt one
    // See #218 for more information
    fileDialog.setOption(QFileDialog::DontUseNativeDialog, true);

    if (fileDialog.exec()) {
        QString dirPath = fileDialog.selectedFiles().first();
        addDirectoryToWatchToListView(dirPath);
    }
}
