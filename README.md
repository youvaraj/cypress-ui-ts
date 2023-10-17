# Cypress UI Test Automation with TypeScript

This is a boiler plate UI test automation framework that uses Cypress with TypeScript and uses page object model design pattern.

## Description

This UI test automation framework based on Cypress contains the following properties.

- Cypress and TypeScript
- Modular Architecture
- Page Object Model (POM) - dedicated page objects for each web page or component with the application. It encapsulate page interaction and corresponding page elements are maintained in separate file
- Test Data Separation - Test data is stored in separate file that are matached with the test suite.
- Reusable components - common actions and behavior of each page are isolated in base page and common actions like clicking , typing, and selecting are maintained in actions class.

## Getting Started

### Installing

- Go to the root folder in command line and run the following command.
  ```
  npm install
  ```

### Pre-Requisite

- Sample test scripts are designed to run on demo application created by Cypress.
  You need to download the stand alone app from github [https://github.com/cypress-io/cypress-realworld-app]and run the test.
  Or if you just want to look and follow the framework you feel free to modify the url and other code based on your url.
  The main idea is to provide the structure and basic guidelines.

### Executing program

Go to the root folder in terminal and run the command this will run the test in headed ( browser will be shown)

```
npm test
```

Note: You can update the test script in package.json to run the test in headless mode.

```
  "scripts": {
    "test": "npx cypress run --browser chrome --spec 'cypress/e2e/test-suite1.cy.ts'",
    "generate-report": "marge cypress/reports/mocha/.jsons/*.json -f report.html"
  },
```

Run similar test or run as group that matches the certain file name.Note: In cypress there is no built-in support to run as group by. Here I have written cypress-script.ts at root folder which takes parameters and run as following.

```
npm run filter <param1> <param2> <param3>



Example Usage
To run all the test that are named as 'batch1' in 'headed' mode for chrome you can run
npm run filter batch1 headed chrome

```

'npm run file' takes three parameters file name pattern, headed and browser name.

**param1** = file name pattern that you want to match eg. sanity \
**param2** = to specifiy if you want to run in headed or headeless mode. Empty means headless, 'headed' means in headed mode \
 **param3** = specify browser type such as 'chrome' 'firefox' etc, If empty it uses chrome by default.

Example Usage
To run all the spec for which file name matches 'sanity' and in headed mode for chrome, you can run below command

```
npm run filter sanity headed chrome
```

If you want to run the same set of sanity test in headless mode you can do this

```
npm run filter sanity
```

## Screenshot

If you ran the test in headles mode than Mocha test report are generated at cypress/reports/mocha/\*.html

![My_Image](./MochaTestReportsHtml.png)

## Demo of running test via Cypress test runner

![My_Image](./RunCypressTestViaRunner.gif)

## Authors

Youva Acharya\
youvaraj@gmail.com
