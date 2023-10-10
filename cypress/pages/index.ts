// cypress/pages/index.ts

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import UserOnBoardingDialog from './UserOnBoardingDialog';
import CreateBankAcctDialog from './CreateBankAcctDialog';
import LeftNavigationPanel from './LeftNavigationPanel';
import HomePage from './HomePage';
import UserSettingsPage from './UserSettingsPage';

const pageObjects = {
  LoginPage,
  SignUpPage,
  UserOnBoardingDialog,
  CreateBankAcctDialog,
  LeftNavigationPanel,
  HomePage,
  UserSettingsPage,
};

export default pageObjects;
