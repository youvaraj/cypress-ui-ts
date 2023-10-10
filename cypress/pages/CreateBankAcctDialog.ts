//cypress/pages/CreateBankAcctDialog.ts

import { CreateBankAcctDialogSelectors } from 'cypress/selectors';
import actions from 'cypress/support/actions';

class CreateBankAcctDialog {
  title = 'Create Bank Account';

  verifyTitle() {
    actions.assertContainsText(
      CreateBankAcctDialogSelectors.dialogTitle,
      this.title
    );
  }

  enterBankData(bankName: string, routinNumber: string, acctNumber: string) {
    actions.type(CreateBankAcctDialogSelectors.txtBankName, bankName);
    actions.type(CreateBankAcctDialogSelectors.textRoutinNumber, routinNumber);
    actions.type(CreateBankAcctDialogSelectors.textAccountNumber, acctNumber);
    actions.click(CreateBankAcctDialogSelectors.btnSave);
  }
}

export default new CreateBankAcctDialog();
