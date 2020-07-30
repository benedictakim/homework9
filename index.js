const inquirer = require("inquirer")
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project title?"
    },
    {
        type: "input",
        name: "projectdescription",
        message: "Project description?"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation?"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage?"
    },
    {
        type: "list",
        name: "license",
        message: "License?",
        choices: ["Apache 2", "MIT", "GPL"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributing?"
    },
    {
        type: "input",
        name: "test",
        message: "Test?"
    },
    {
        type: "input",
        name: "githubname",
        message: "Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "Email address?"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile("README.md", generateMarkdown (response))
    })
}

// function call to initialize program
init();
