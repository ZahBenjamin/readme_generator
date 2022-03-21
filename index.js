// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the description?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installing instructions?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'What is the usage information?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'instructions',
  },
  {
    type: 'list',
    message: 'Which license would you like to choose?',
    name: 'license',
    choices: [
      "MIT",
      "OTHER1",
      "OTHER2"
    ]
  },
  {
    type: 'input',
    message: 'What is your github username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  }
];


// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log('Success!');
  });
}



// Function to initialize app
 function init() {
   inquirer.prompt(questions).then( (data) => {
   const markdown = generateMarkdown(data);
   console.log(typeof data.title);
   console.log(data);
   writeToFile('exampleREADME.md', markdown);
  })
  };



// Function call to initialize app
init();

// TODO: License/badge







// notes 

//   console.log(data.title);
//   console.log(data.description);
//   console.log(data.install);
//   console.log(data.usage);
//   console.log(data.contribution);
//   console.log(data.instructions);
//   console.log(data.license);
//   console.log(data.github);
//   console.log(data.email);
=