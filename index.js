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
      "Apahce",
      "ISC",
      "GPLv3"
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
    let badges = {
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      Apache: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  data.license = badges[data.license]
   const markdown = generateMarkdown(data);
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
