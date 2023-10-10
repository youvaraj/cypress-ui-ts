import pageObjects from 'cypress/pages';

let testdata: any;

describe('Test Suite - New user on board flow', () => {
  before(() => {
    cy.fixture('test-user-onboarding.json').then((data) => {
      testdata = data;
      console.log(testdata);
    });
  });

  it('should take user to Sign Up Screen', () => {
    pageObjects.LoginPage.visit();
    pageObjects.LoginPage.gotoSignUp();
    pageObjects.SignUpPage.verifyTitle();
    pageObjects.SignUpPage.signUp(
      testdata.user.firstName,
      testdata.user.lastName,
      testdata.user.username,
      testdata.user.password,
      testdata.user.password
    );
    pageObjects.LoginPage.login(testdata.user.username, testdata.user.password);
    pageObjects.UserOnBoardingDialog.verifyTitleAndGoNext(
      'Get Started with Real World App'
    );
    pageObjects.CreateBankAcctDialog.enterBankData(
      testdata.bankdetail.bankname,
      testdata.bankdetail.routingNumber,
      testdata.bankdetail.accountNumber
    );
    pageObjects.UserOnBoardingDialog.verifyTitleAndGoNext('Finished');
  });

  it('ensure bank account is added and verify the details', () => {
    pageObjects.LoginPage.visit();
    pageObjects.LoginPage.login(testdata.user.username, testdata.user.password);
    pageObjects.LeftNavigationPanel.goToBankAccounts();
  });
});
