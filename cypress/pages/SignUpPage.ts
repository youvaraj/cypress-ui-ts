//cypress/pages/SignUpPage.ts

import { SignUpPageSelectors } from 'cypress/selectors';
import actions from 'cypress/support/actions';

class SignUpPage {
  title = 'Sign Up';

  signUp(fn: string, ln: string, un: string, pwd: string, pwdconfirm: string) {
    actions.type(SignUpPageSelectors.txtFirstName, fn);
    actions.type(SignUpPageSelectors.txtLastName, ln);
    actions.type(SignUpPageSelectors.txtUsername, un);
    actions.type(SignUpPageSelectors.txtPassword, pwd);
    actions.type(SignUpPageSelectors.txtConfirmPassword, pwdconfirm);
    actions.click(SignUpPageSelectors.btnSignUp);
  }

  verifyTitle() {
    actions.assertContainsText(
      SignUpPageSelectors.sectionPageTitle,
      this.title
    );
  }
}

export default new SignUpPage();
