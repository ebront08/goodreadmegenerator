// TODO: Include packages needed for this application
const inquire = require("inquirer");
const generateMarkdown = require("generate-markdown");
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What did you title your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "For the table of contents, press ENTER.",
  },
  {
    type: "input",
    name: "installation",
    message: "What type of dependencies are installed?" 
  },
  {
    type: "input",
    name: "usage",
    message: "What steps or procedures would be required?"
  },
  {
    type: "input",
    name: "license",
    message: "What licensing process would be needed for your project?"
  },
  {
    type: "input",
    name: "contributions",
    message: "Who were the contributors to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "How did you confirm the validity of your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data,function(err) {
        console.log(fileName), 
        console.log(data), 
        err ? console.log(err) : console.log("A README file has been created.")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
