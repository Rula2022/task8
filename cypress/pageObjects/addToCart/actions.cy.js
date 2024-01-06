class addToCartActions {
  searchForShirtProduct(product) {
    cy.get("#search").type(product);
  }
  chooseTheFirstProduct() {
    cy.get(".product-items li").first().click();
  }
  chooseTheSizeAndColorForProduct(size, colorIndex) {
    cy.get(".swatch-attribute.size").contains(size).click();
    cy.get(".swatch-attribute.color").find(".swatch-option").eq(colorIndex).click();
  }
  clickOnAddToCartButton() {
    cy.get("#product-addtocart-button").click();
  }
}
export default addToCartActions;
