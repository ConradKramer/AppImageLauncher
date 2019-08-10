/* central file for utility functions */

// system headers
#include <string>

// library headers
#include <QString>

// makes an existing file executable
bool makeExecutable(const std::string& path);

// integrates an AppImage using a standard workflow used across all AppImageLauncher applications
bool integrateAppImage(const QString& pathToAppImage, const QString& pathToIntegratedAppImage);

// standard location for integrated AppImages
// currently hardcoded, can not be changed by users
static const auto integratedAppImagesDestination = QString(getenv("HOME")) + "/.bin/";

// build path to standard location for integrated AppImages
QString buildPathToIntegratedAppImage(const QString& pathToAppImage);
