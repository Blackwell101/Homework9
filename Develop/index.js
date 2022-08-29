// TODO: Include packages needed for this application
// packages used for readme generator
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
//questions for user readme
const questions = [
    {
        name: "title",
        type: "input",
        message: "Give your Readme a title "
    },
    {
        name: "descripton", 
        type: "input",
        message: "Give your Readme a description "
    },
    {
        name: "table of contents", 
        type: "input",
        message: "Give your Readme a table of contents "
    },
    {
        name: "installations",
        type: "input",
        message: "List installations for Readme "
    },
    {
        name: "usage",
        type: "input",
        message: "What is your Readme used for? "
    },
    {
        name: "license",
        type: "input",
        message: "What are your licenses for your readme? "
    },
    {
        name: "contributing",
        type: "input",
        message: "What are the contributions of your Readme? "
    },
    {
        name: "tests",
        type: "input",
        message: "Run tests for your readme "
    },
    {
        name: "questions",
        type: "input",
        message: "What are your questions for your Readme? "
    }
];

// function to write readme file
const promptUser = () => {
    return inquirer.prompt(questions);
}


// TODO: Create a function to write README file
// function to write readme file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/README.md', data, err => {
            if (err) {
                reject(err);
                return
            }
            resolve ({
                ok: true,
                message: 'Readme file created'
            })
        })
    })
}

// TODO: Create a function to initialize app
// function to start program
function init() {}

// Function call to initialize app
init();
