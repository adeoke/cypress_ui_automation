describe('Heading text', () => {

  it('contains the correct title text', () => {
    cy.visit('https://traxxas.com/')

    cy.get('title')
      .invoke('text')
      .should('equal', 'RC Cars | RC Trucks | Traxxas')
  })

});