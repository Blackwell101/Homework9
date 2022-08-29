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
        message: "give your Readme a description "
    },
    {
        name: "table of contents", 
        type: "input",
        message: "input your table of contents "
    },
    {
        name: "installations",
        type: "input",
        message: "list installations for Readme "
    },
    {
        name: "usage",
        type: "input",
        message: "what is your Readme used for? "
    },
    {
        name: "license",
        type: "input",
        message: "what are your licenses for your readme? "
    },
    {
        name: "contributing",
        type: "input",
        message: "what is your Readme contributing? "
    },
    {
        name: "tests",
        type: "input",
        message: "how do you run your tests in your readme? "
    },
    {
        name: "questions",
        type: "input",
        message: "input your questions for your readme "
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
