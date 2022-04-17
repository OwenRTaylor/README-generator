var license = {};
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() {
if (dataArr[4] == 'MIT') {
  license.badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  license.link = 'https://opensource.org/licenses/MIT'
  license.text = 'This project uses the MIT license:'

} else if (dataArr[4] == 'APACHE 2.0'){
  license.badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  license.link = 'https://opensource.org/licenses/Apache-2.0'
  license.text = 'This project uses the Apache 2.0 license:'

}else if (dataArr[4] == 'GPL 3.0'){
  license.badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  license.link = 'https://www.gnu.org/licenses/gpl-3.0'
  license.text = 'This project uses the GPL license:'


}else if (dataArr[4] == 'BSD 3'){
  license.badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
license.link = 'https://opensource.org/licenses/BSD-3-Clause'
license.text = 'This project uses the BSD 3 license:'
} else {
  license.badge = '';
  license.link = '';
  license.text = 'There is currently no license attched to this project';
  
}
return license
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('1')
  return `# ${data.title}

`;
}

module.exports.renderLicenseBadge = renderLicenseBadge;
//const file = require('./Develop/index.js')
console.log(123)


