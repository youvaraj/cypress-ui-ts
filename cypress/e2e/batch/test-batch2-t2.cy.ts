import pageObjects from 'cypress/pages';

let testdata: any;

describe('Test2 -  this is test batch 2 test 1', () => {
  before(() => {
    cy.fixture('/batch/test-batch2-t2.json').then((data) => {
      testdata = data;
      console.log(testdata);
    });
  });

  it('ensure user is able to save user settings', () => {
    pageObjects.LoginPage.visit();
    pageObjects.LoginPage.login(testdata.user.username, testdata.user.password);
    pageObjects.LeftNavigationPanel.goToMyAccount();
  });

  it('print corresponding test data', () => {
    cy.log(testdata.test.filename);
    cy.log(testdata.test.tag);
  });
});
