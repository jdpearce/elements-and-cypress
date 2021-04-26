describe('eletest', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the popup as an element', () => {
    cy.get('popup-element').should('not.exist');

    cy.get('[data-testid=show-as-element]').click();

    cy.get('popup-element').should('exist');
  });

  it('should display the popup as a component', () => {
    cy.get('popup-component').should('not.exist');

    cy.get('[data-testid=show-as-component]').click();

    cy.get('popup-component').should('exist');
  });
});
