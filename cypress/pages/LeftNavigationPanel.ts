//cypress/pages/LoginPage.ts
import { LeftNavigationPanelSelectors } from 'cypress/selectors';
import actions from 'cypress/support/actions';

class LeftNavigationPanel {
  goToBankAccounts() {
    actions.click(LeftNavigationPanelSelectors.lnkBankAccts);
  }
  goToMyAccount() {
    actions.click(LeftNavigationPanelSelectors.lnkMyAccount);
  }
  goToHome() {
    actions.click(LeftNavigationPanelSelectors.lnkHome);
  }
  clickLogOut() {
    actions.click(LeftNavigationPanelSelectors.lnkLogout);
  }
}

export default new LeftNavigationPanel();
