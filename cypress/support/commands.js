require('cypress-xpath');
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')
Cypress.Commands.add('handleConfirmation', (expectedMessage) => {
  cy.on('window:confirm', (message) => {
    if (message === expectedMessage) {
      return true; // Click "OK"
    }
  });
});
import 'cypress-real-events/support';

Cypress.Commands.add('dragAndDrop', { prevSubject: 'element' }, (subject, targetSelector) => {
  cy.wrap(subject).realDragTo(targetSelector);
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })