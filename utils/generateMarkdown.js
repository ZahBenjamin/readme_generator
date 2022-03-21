// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}


// TODO: Function to generate markdown for README
function generateMarkdown(data) {
  let wowMarkdown =  
  `# ${data.title}

  ## Description 
  
  *Everything you need to know:* 
  
  ${data.description}
  
  ## License

  ${data.license}

  ## Table of contents


  1.[Install](#installation)
  2.[Usage](#usage)
  3.[Contribution](#contribution)
  4.[Tests](#tests)
  5.[Questions](#questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.instructions}

  ## Questions

  Feel free to see my work at https://github.com/${data.github}

  I am available by email at ${data.email}


`;

return wowMarkdown;
}

module.exports = generateMarkdown;