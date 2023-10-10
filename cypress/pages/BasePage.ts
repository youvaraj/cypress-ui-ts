//cypress/pages/HomePage.ts
import { BasePageSelectors } from 'cypress/selectors';
import actions from 'cypress/support/actions';

class BasePage {
  constructor() {}

  verifyPageHeader(title: string) {
    actions.assertContainsText(BasePageSelectors.pageHeader, title);
  }

  verifySuccessMessage(msg: string) {
    actions.assertContainsText(BasePageSelectors.divAlertMessage, msg);
  }
}

export default BasePage;
