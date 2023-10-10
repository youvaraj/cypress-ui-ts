//cypress/pages/LoginPage.ts
import { LoginPageSelectors } from 'cypress/selectors';
import actions from 'cypress/support/actions';
import SignUpPage from './SignUpPage';

class LoginPage {
  visit() {
    cy.visit('/users/sign_in');
  }

  login(username: string, password: string) {
    actions.type(LoginPageSelectors.txtUsername, username);
    actions.type(LoginPageSelectors.txtPassword, password);
    actions.click(LoginPageSelectors.btnSignIn);
  }

  gotoSignUp() {
    actions.click(LoginPageSelectors.lnkSignUp);
    SignUpPage.verifyTitle();
  }
}

export default new LoginPage();
