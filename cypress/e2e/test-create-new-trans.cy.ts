import pageObjects from 'cypress/pages';

let testdata: any;

describe('Test Suite - Create new transaction', () => {
  before(() => {
    cy.fixture('test-create-new-trans.json').then((data) => {
      testdata = data;
      console.log(testdata);
    });
  });

  it('ensure user is able to create new transaction', () => {
    pageObjects.LoginPage.visit();
    pageObjects.LoginPage.login(
      testdata.sender.username,
      testdata.sender.password
    );
    pageObjects.HomePage.createNewTransaction(
      testdata.contact.firstName,
      testdata.contact.lastName
    );
    pageObjects.HomePage.enterPaymentAndRequests(
      testdata.payment.amount,
      testdata.payment.note
    );
    pageObjects.HomePage.verifyTransactionSuccessMessage(
      parseInt(testdata.payment.amount),
      testdata.payment.note
    );
    pageObjects.HomePage.verifySuccessMessage('Transaction Submitted!');
    pageObjects.LeftNavigationPanel.goToHome();
    pageObjects.HomePage.navigateToMine();
    pageObjects.HomePage.verifyPageHeader('Personal');
    pageObjects.LeftNavigationPanel.clickLogOut();
  });
});
