const elements = {
  btnNew: 'a[data-test="nav-top-new-transaction"]',
  inputSearch: '#user-list-search-input',
  divContactFullName:
    '[data-test^="user-list-item-"] > .MuiListItemText-root > .MuiListItemText-primary',
  inputAmount: '#amount',
  inputNote: '#transaction-create-description-input',
  btnPay: 'button[data-test="transaction-create-submit-payment"]',
  btnRequest: 'button[data-test="transaction-create-submit-request"]',
  tabMine: 'a[href="/personal"]',
};

export default elements;
