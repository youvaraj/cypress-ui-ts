// cypress/selectors/index.ts
/**
 * Elements naming convention style is prefix
 * Syntax: 3-4 characters prefix and userful name
 * for example
 * Text inputs: Prefix : txt, Examples: txtUsername, txtPassword,txtSearch
 * Buttons: Prefix: 'btn', Examlples: btnSubmit, btnCancel,btnSave
 * Labels: Prefix: 'lbl', Examples: lblError,lblDescription,lblName
 * Checkboxes: Prefix: 'chk', Examples: chkAgreeToTerms,chkSubscribeNewsLetter
 * Radio Buttons: Prefix: 'rad', Examples: 'radGenderMale, radPaymentMethod,radYes,radNo
 * Select Boxes ( Drop down), Prefix: 'ddl' or 'sel', Examples: ddlCountry,selPaymentMethod
 * Links: Prefix: 'lnk', Examples: lnkHomePage,lnkForgotPassword
 * Icons: Prefix: 'ico', Examples: icoInfo, icoWarning
 * Images: Prefix: 'img', Examples: 'imgLogo,imgProductThumbnail
 * Alerts/Toast: Prefix: 'toast' or 'alert', Example: toastSuccessMessage, alertErrorMessage
 * Containers/Sections: Prefix: 'container' or 'section' or 'div', Examples: containerUserProfile, sectionProductDetails, divHeader
 * Frames/iFrame: Prefix: 'frame' or 'iframe', Examples: frameMap, iframeEmbeddedVideo
 * TableElements: Prefix: 'tbl', Examples: tblOrderHistory, tblProducList
 * Forms: Prefix: 'form', Examples: formRegistration,formLogin
 * Navigation Elements, Prefix: 'nav', navMainMenu, navTabNavigation
 * Modals/Dialogs. Prefix: 'modal' or 'dlg' Examples: modalUserProfile, dlgConfirmation
 * Notifications/Banners: Prefix: 'notify' or 'banner' Examples: notifyError, bannerPromotion
 *
 *
 */
import BasePageSelectors from './BasePageSelectors';
import LoginPageSelectors from './LoginPageSelectors';
import SignUpPageSelectors from './SignUpPageSelectors';
import CreateBankAcctDialogSelectors from './CreateBankAcctDialogSelectors';
import UserOnBoardingDialogSelectors from './UserOnBoardingDialogSelectors';
import LeftNavigationPanelSelectors from './LeftNavigationPanelSelectors';
import HomePageSelectors from './HomePageSelectors';
import UserSettingsSelectors from './UserSettingsSelectors';

export {
  BasePageSelectors,
  LoginPageSelectors,
  SignUpPageSelectors,
  CreateBankAcctDialogSelectors,
  UserOnBoardingDialogSelectors,
  LeftNavigationPanelSelectors,
  HomePageSelectors,
  UserSettingsSelectors,
};
