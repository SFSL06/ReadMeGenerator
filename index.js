const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
     {
      name: 'name',
      message: 'What is the name of your project?',

    },
    {
      name: 'description',
      message: 'Please give short Project Description.',
    },
    {
      name: 'installation',
      message: 'What command do you need to install application? Please provide step by step instructions if required',
    },
    {
      name: 'usage',
      message: 'Please provide instructions for use',
    },
    {
      name: 'credits',
      message: 'List collaborators if any',
    },
    {
      name: 'license',
      message: 'License',
    },     
    {
      name: 'test',
      message: 'Tests if any',
      default: 'npm test'
    },
    {
      name: 'github',
      message: 'Github:',
    },
    {
      name: 'email',
      message: 'Email for queries:',
    }

  ])
  

const generateReadMe = (answers) =>
`# ${answers.name}

  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [GitHub](#gitHub)
  8. [E-mail](#e-mail)

## Description
${answers.description} 

![README_GeneratorScreenshot](/ReadMeGeneratorScreenshot1.jpg)

## Installation
${answers.installation}

## Usage

${answers.usage}

## Contributing
${answers.credits}

## Tests
${answers.test}

## License
${answers.license}

## GitHub
${answers.github}

## E-mail
${answers.email}`;


promptUser()
  .then((answers) => writeFileAsync('ReadMeGenerator.md', generateReadMe(answers)))
  .then(() => console.log('Successfully created ReadMe file'))
  .catch((err) => console.error(err));
