/// <reference types="cypress" />

describe('Feature: Loading Application', () => {
  it('should reach the application through the browser', () => {
    cy
      .visit("/")
      .get('[data-cy=txt-title]')
      .should('have.text', 'The TechShow WebSite')
      .get('[data-cy=txt-site-name]')
      .should('contain', 'pymug.com');
  })
});
