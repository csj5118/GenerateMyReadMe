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
        name : 'Installation',
        message : 'Provide installation instructions',
    },
    {
        type : 'input',
        name : 'Usage',
        message : 'Provide usage information : ',
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
        name : 'Contact',
        message : 'Provide your links so people can reach out to you',
    },
    {
        type : 'list',
        name : 'License',
        message : 'Please choose the License you used for your ReadMe file',
        choices : ['MIT', 'GNU General Public License v3.0', 'ISC', 'Microsoft Public License', 'Eclipse Public License', 'Creative Commons Zero 1.0 Universal'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(ReadMeGenrator, data, (err)=>
    err ? console.error(err) : console.log ('ReadMe.md successfully generated')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
    const readmeContent = `
    # ${answers.title}

    ## Description
    ${answers.description}


    ## Installation 
    ${answers.installation}


    ## Usage
    ${answers.usage}

    ## tools
    ${answers.tools}


    ## links
    ${answers.links}

    ## credits
    ${answers.credits}


    ## License 
    This ReadMe is using the ${answers.license} license



    ## Contact
    ${answers.contact}
`;
  
    writeToFile('README.md', readmeContent);
});
}

// Function call to initialize app
init();
