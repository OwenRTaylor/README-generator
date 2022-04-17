// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');
var i = 0;
dataArr = [];
var markdownText = ``;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'input',
        message: 'What is your github username',
        default: 'username'
    },
    {
        type: 'input',
        name: 'input',
        message: 'What is your github email address:',
        default: 'your email'
    },
    {
        type: 'input',
        name: 'input',
        message: 'What is your projects name:',
        default: 'Project name'
    },
    {
        type: 'input',
        name: 'input',
        message: 'please write a short description of your project:',
        default: 'No Decription'
    },
    {
        type: 'checkbox',
        name: 'input',
        message: 'What kind of license should your project have:',
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','none'],
        default: 'none'
    },
    {
        type: 'input',
        name: 'input',
        message: 'What command should be run to install dependencies:',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'input',
        message: 'What command should be run to run tests:',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'input',
        message: 'What does the user have to know abour using the repo:',
        default: ''
    },
    {
        type: 'input',
        name: 'input',
        message: 'What does the user need to know about contributing to the repo:',
        default: ''
    }
];
var license={};

function writeToFile(fileName) {
    
    markdownText = `# ${dataArr[2]}\n${license.badge}\n## Description \n${dataArr[3]}\n\n\n## Table of contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n` +
    `- [Contributing](#contributing)\n- [License](#license)\n- [Tests](#tests)\n- [Questions](#questions)\n\n## Installation \n To install dependencies, run the following command: ${dataArr[5]}\n
    \n## Usage\n${dataArr[7]} \n## License\n${license.text}  ${license.link} \n## Contributing\n${dataArr[8]} \n## Tests\n To run tests run the command: ${dataArr[6]} \n`+
    `## Questions\n You can find my at https://github.com/${dataArr[0]}\n\n And email me at https://${dataArr[1]}`;
    fs.appendFile(fileName, markdownText ,error => {
        console.error(error)
    })
    
}

// TODO: Create a function to initialize app
function init() {
    if (i<=8 ){
inquirer.prompt(questions[i]).then(function(data) {
    
    console.log(data)
    dataArr[i] = data.input
    i++
    console.log(dataArr)
    init();
})
    } else {
        license = file1.renderLicenseBadge(dataArr[4])

        console.log(license)
        writeToFile('README.md')
    }
}

// Function call to initialize app

init();
const file1 = require('./utils/generateMarkdown.js');
