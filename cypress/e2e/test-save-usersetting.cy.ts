import pageObjects from 'cypress/pages';

let testdata: any;

describe('Test - User Settings save works', () => {
  before(() => {
    cy.fixture('test-user-onboarding.json').then((data) => {
      testdata = data;
      console.log(testdata);
    });
  });

  it('ensure user is able to save user settings', () => {
    pageObjects.LoginPage.visit();
    pageObjects.LoginPage.login(testdata.user.username, testdata.user.password);
    pageObjects.LeftNavigationPanel.goToMyAccount();

    pageObjects.UserSettingsPage.setUserSettings(
      testdata.user.email,
      testdata.user.phoneNumber
    );
    pageObjects.LeftNavigationPanel.goToHome();
    pageObjects.LeftNavigationPanel.goToMyAccount();
    pageObjects.UserSettingsPage.verifyUserSettings(
      testdata.user.firstName,
      testdata.user.lastName,
      testdata.user.email,
      testdata.user.phoneNumber
    );
  });
});
