import arg from 'arg';
import inquirer from 'inquirer'
import { createProject } from './main'


//creates commands/arguments users can pass in
function parseCommandLineOptions(rawArgs) {
    const args = arg(
        {
            '--git': Boolean,
            '--yes': Boolean,
            '--intsall': Boolean,
            '-g': '--git',
            '-y': '--yes',
            '-i': '--install'
        },
        {
            argv: rawArgs.slice(2)
        }
    );
    return {
        skipPrompts: args['--yes'] || false,
        git: args['--git'] || false,
        runInstall: args['--install'] || false,
        template: args._[0],
    }
}

async function promptUsersForMissingInputs(options) {

    //account for missing file template
    const defaultTemplate = 'Javascript';
    if (options.skipPrompts) {
        return {
            ...options,
            template: options.template || defaultTemplate
        }
    }

    const questions = [];

    if (!options.template) {
        questions.push({
            type: 'list',
            name: 'template',
            message: 'Please choose which template to use',
            choices: ['Javascript', 'Typescript'],
            default: defaultTemplate
        })
    };

    //account for missing git command
    if (!options.git) {
        questions.push({
            type: 'confirm',
            name: 'git',
            message: 'initalise a git repository?',
            default: 'false'
        })
    }

    const answers = await inquirer.prompt(questions);
    return {
        ...options,
        template: options.template || answers.template,
        git: options.git || answers.git
    }

}


//logs cli questions to the console
export async function cli(args) {
    let options = parseCommandLineOptions(args)
    options = await promptUsersForMissingInputs(options)
    await createProject(options);
    console.log(options)
}
