// library headers
#include <QCoreApplication>
#include <QCommandLineParser>

// local headers
#include "CommandFactory.h"
#include "exceptions.h"
#include "logging.h"

using namespace appimagelauncher::cli;
using namespace appimagelauncher::cli::commands;

int main(int argc, char** argv) {
    QCoreApplication app(argc, argv);

    QCommandLineParser parser;

    parser.addPositionalArgument("<command>", "Command to run (see help for more information");
    parser.addPositionalArgument("[...]", "command-specific additional arguments");
    parser.addHelpOption();

    parser.process(app);

    auto posArgs = parser.positionalArguments();

    if (posArgs.isEmpty()) {
        qerr() << parser.helpText().toStdString().c_str() << endl;

        qerr() << "Available commands:" << endl;
        qerr() << "  integrate   Integrate AppImages passed as commandline arguments" << endl;

        return 2;
    }

    auto commandName = posArgs.front();
    posArgs.pop_front();

    try {
        auto command = CommandFactory::getCommandByName(commandName);
        command->exec(posArgs);
    } catch (const CommandNotFoundError& e) {
        qerr() << e.what() << endl;
        return 1;
    } catch (const InvalidArgumentsError& e) {
        qerr() << "Invalid arguments: " << e.what() << endl;
        return 3;
    } catch (const UsageError& e) {
        qerr() << "Usage error: " << e.what() << endl;
        return 3;
    }

    return 0;
}
