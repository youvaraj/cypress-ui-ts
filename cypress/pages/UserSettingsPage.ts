//cypress/pages/UserSettingsPage.ts

import { UserSettingsSelectors } from 'cypress/selectors';
import actions from 'cypress/support/actions';

class UserSettingsPage {
  setUserSettings(email: string, phoneNumber: string) {
    actions.type(UserSettingsSelectors.inputEmail, email);
    actions.type(UserSettingsSelectors.inputPhoneNumber, phoneNumber);
    actions.click(UserSettingsSelectors.btnSave);
  }

  verifyUserSettings(
    fn: string,
    ln: string,
    email: string,
    phoneNumber: string
  ) {
    actions.assertContainsValue(UserSettingsSelectors.inputFirstName, fn);
    actions.assertContainsValue(UserSettingsSelectors.inputLastName, ln);
    actions.assertContainsValue(UserSettingsSelectors.inputEmail, email);
    actions.assertContainsValue(
      UserSettingsSelectors.inputPhoneNumber,
      phoneNumber
    );
  }
}

export default new UserSettingsPage();
