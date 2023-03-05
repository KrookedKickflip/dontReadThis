// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'A short description of your project.',
},
{
    type: 'input',
    name: 'table of contents',
    message: 'Table of contents',
},
{
    type: 'input',
    name: 'installation',
    message: 'How would i install this?',
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use it?',
},
{
    type: 'list',
    name: 'license',
    message: 'choose a license for your project',
    choices: ['MIT', 'your mom'],
},
{
    type: 'input',
    name: 'contributing',
    message: '',
},
{
    type: 'input',
    name: 'tests',
    message: '',
},
{
    type: 'input',
    name: 'questions',
    message: '',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README file completed!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
      });
}

// Function call to initialize app
init();


//console.log(generateMarkdown);