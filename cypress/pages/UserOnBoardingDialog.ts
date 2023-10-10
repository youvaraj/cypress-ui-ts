//cypress/pages/LoginPage.ts
import { UserOnBoardingDialogSelectors } from 'cypress/selectors';
import actions from 'cypress/support/actions';

class UserOnBoardingDialog {
  verifyTitle(title: string) {
    actions.assertContainsText(
      UserOnBoardingDialogSelectors.dialogTitle,
      title
    );
  }

  verifyTitleAndGoNext(title: string) {
    actions.assertContainsText(
      UserOnBoardingDialogSelectors.dialogTitle,
      title
    );
    actions.click(UserOnBoardingDialogSelectors.btnNext);
  }

  ciickNext() {
    actions.click(UserOnBoardingDialogSelectors.btnNext);
  }
}

export default new UserOnBoardingDialog();
