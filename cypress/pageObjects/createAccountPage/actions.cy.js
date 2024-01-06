class createAccountPageActions {
  visitCreateAccountPage() {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    return this;
  }
  typeInFirstNameField(firstName) {
    cy.get("#firstname").type(firstName);
    return this;
  }
  typeInLastNameField(lastName) {
    cy.get("#lastname").type(lastName);
    return this;
  }
  typeInEmailField(email) {
    cy.get("#email_address").type(email);
    return this;
  }
  typeInPasswordField(password) {
    cy.get("#password").type(password);
    return this;
  }
  typeInConfirmPasswordField(confirmPassword) {
    cy.get("#password-confirmation").type(confirmPassword);
    return this;
  }
  clicksOnCreateAccountButton() {
    cy.get(".submit.primary").click();
    return this;
  }
}
export default createAccountPageActions;
