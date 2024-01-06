class addToCartAssertions {
  checkCounterOfTheCartVisible() {
    cy.get(".counter-number").should("be.visible");
  }
}
export default addToCartAssertions;
