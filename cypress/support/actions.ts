// cypress/support/actions.ts

const actions = {
  click: (selector: string) => {
    cy.get(selector).click();
  },

  clickContains: (selector: string, containsText: string) => {
    cy.get(selector).contains(containsText).click();
  },

  getElemContainsAttribute: (attribute: string, containing: string) => {
    const selector = `[${attribute}*=${containing}]`;
    return cy.get(selector);
  },

  getChildElementContainsText: (
    selectorParent: string,
    childTag: string,
    containing: string
  ) => {
    const find_selector = `${childTag}:contains("${containing}")`;
    return cy.get(selectorParent).find(find_selector);
  },

  type: (selector: string, text: string) => {
    cy.get(selector).clear().type(text);
  },

  assertContainsText: (selector: string, text: string) => {
    cy.get(selector)
      .invoke('text')
      .then((text) => {
        cy.log(`text = ${text}`);
      });
  },

  assertContainsValue: (selector: string, value: string) => {
    cy.get(selector).should('have.value', value);
  },

  getText: (selector: string, index: number): Cypress.Chainable<string> => {
    return cy
      .get(selector)
      .eq(index)
      .invoke('text')
      .then((text) => text as string);
  },
};

export default actions;
