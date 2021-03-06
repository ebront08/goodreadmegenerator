// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (data) => {
  if (data.license === false) {
      return '';
  } else {
      return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseTOC = (data) => {
  if (data.license === false) {
      return '';
  } else {
      return '* [License](#license)';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.github}/${data.title}
# Description
${data.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTOC(data)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.installation}
# Usage
In order to use this app, ${data.usage}
# License
This project is licensed under the ${data.license} license. 
${renderLicenseBadge(data)}
# Contributions
​Contributors: ${data.contributions}
# Tests
The following is needed to run tests: ${data.test}
# Questions
If you have any questions about the repository contact ${data.contributions} directly at : ${data.email}.
`;
}

module.exports = {generateMarkdown, renderLicenseBadge};
