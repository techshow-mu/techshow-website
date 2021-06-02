/// <reference types="cypress" />

describe('Feature: Home Page', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should load the home page in the browser', () => {
    cy
      .get('[data-cy=txt-title]')
      .should('have.text', 'The TechShow WebSite')
      .get('[data-cy=hdg-home]')
      .should('have.text', 'Home')
      .get('[data-cy=txt-site-name]')
      .should('contain', 'pymug.com');
  });

  it('should have a navigation with links to Home, Podcasts and Guests pages', () => {
    cy
      .get('[data-cy=lnk-home]')
      .should('have.text', 'Home')
      .get('[data-cy=lnk-podcasts]')
      .should('have.text', 'Podcasts')
      .get('[data-cy=lnk-guests]')
      .should('have.text', 'Guests');
  });
});