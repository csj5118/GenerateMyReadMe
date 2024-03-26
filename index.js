// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type : 'input',
        name : 'title',
        message: 'What is the title of your Project?'
    },
    {
        type : 'input',
        name : 'description',
        message : 'Provide a description of your project : '
    },
    {
        type : 'input',
        name : 'Tools',
        message : 'What tools and Packages did you have to use for this project? : '
    },
    {
        type : 'input',
        name : 'Links',
        message : 'Please provide links to your project : '
    },
    {
        type : 'input',
        name : 'Credits',
        message : 'Please list anyone you wish to give credit to : '
    },
    {
        type : 'input',
        name : 'License',
        message : 'List the License you choose to use for your ReadMe file'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
