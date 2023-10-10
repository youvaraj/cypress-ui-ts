//cypress/pages/HomePage.ts
import { HomePageSelectors } from 'cypress/selectors';
import actions from 'cypress/support/actions';
import BasePage from './BasePage';

class HomePage extends BasePage {
  navigateToMine() {
    actions.click(HomePageSelectors.tabMine);
  }
  createNewTransaction(contactFirstName: string, contactLastName: string) {
    actions.click(HomePageSelectors.btnNew);
    actions.type(
      HomePageSelectors.inputSearch,
      `${contactFirstName} ${contactLastName}`
    );
    actions.clickContains(
      HomePageSelectors.divContactFullName,
      `${contactLastName} ${contactFirstName}`
    );
  }
  enterPaymentAndRequests(amount: string, note: string) {
    actions.type(HomePageSelectors.inputAmount, amount);
    actions.type(HomePageSelectors.inputNote, note);
    actions.click(HomePageSelectors.btnRequest);
  }
  enterPaymentAndPay(amount: string, note: string) {
    actions.type(HomePageSelectors.inputAmount, amount);
    actions.type(HomePageSelectors.inputNote, note);
    actions.click(HomePageSelectors.btnPay);
  }
  verifyTransactionSuccessMessage(dollarAmount: number, msg: string) {
    let message: string;
    message = `Requested \$${dollarAmount.toFixed(2)} for ${msg}`;
    actions.getText('h2', 1).then((text) => {
      expect(text).to.equal(message);
    });
  }
}

export default new HomePage();
