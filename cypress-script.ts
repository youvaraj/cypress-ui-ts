// cypress-script.ts
const cypress = require('cypress');

// access command line arguments
const args = process.argv.slice(2);

// get all the arguments choices here

let testFiles = '';
let file_name_pattern = args[0] === '' || undefined ? '.' : args[0];
let headed = args[1] === 'headed' ? true : false;
let browser = args[2] === '' || undefined ? 'chrome' : args[2];
console.log(`args >> \n`);
console.log(`headed = ${headed}`);
console.log(`browser = ${browser}`);

// check if an argument is provided
if (args.length < 1) {
  console.warn('No filter argument provided. Using the default test files.');
  testFiles = 'cypress/e2e/batch/*.cy.ts';
} else {
  testFiles = `cypress/e2e/batch/*${file_name_pattern}*.cy.ts`;
  console.log(testFiles);
}

cypress.run({
  spec: testFiles,
  headed: headed,
  browser: browser,
});
