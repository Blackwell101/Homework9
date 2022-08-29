// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "NONE") {
    return `![$license]`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "NONE") {
    return (
      `\n* [license](#license)\n`
    )
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NONE") {
    return (
      `##license
      this project was developed under the ${license} license.`
    )
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Project Title
    ${data.title}

  ## Descripton
    ${data.description}
  
  ## Technologies
    ${data.technologies}
  
  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}
  
  ## License
    ${data.license}
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
    ${renderLicenseSection(data.license)}
  
  ## Contributing
    ${data.contributing}

  ## Tests
    ${data.tests}

  ## questions 
    See Github [Github](https://www.github.com/${data.github})
    email me <${data.email}>
`;
}

module.exports = generateMarkdown;
