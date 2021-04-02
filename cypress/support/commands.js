/**
 * visitPage custom command to navigate to specified page from main navigation
 * @param {string} pageName - Name of the page to navigate to
*/
Cypress.Commands.add('visitPage', (pageName) => {
  cy
    .visit('/')
    .get(`[data-cy=lnk-${pageName}]`)
    .click()
    .url('contain', `/${pageName}`)
    .get(`[data-cy=hdg-${pageName}]`)
    .should('have.text', `${pageName.charAt(0).toUpperCase()}${pageName.slice(1)}`)
});
