// function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title : ${data.title}
## Project Description:
${data.projectdescription}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributors
${data.contributing}
## Test
${data.test}
## Questions
If you have any questions, contact ${data.githubname} on Github or email ${data.email}.
`;
}

module.exports = generateMarkdown;