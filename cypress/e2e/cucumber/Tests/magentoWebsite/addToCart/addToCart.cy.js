import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import addToCartActions from "../../../../../pageObjects/addToCart/actions.cy";
import addToCartAssertions from "../../../../../pageObjects/addToCart/assertions.cy";
import sharedActions from "../../../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../../../pageObjects/shared/assertions.cy";

const addToCartAcction = new addToCartActions();
const addToCartAssertion = new addToCartAssertions();
const sharedAction = new sharedActions();
const sharedAssertion = new sharedAssertions();

Given("The user navigated to magento website", () => {
  sharedAction.openMagentoWebsite();
});

Given("The user search for shirt {word}", () => {
  addToCartAcction.searchForShirtProduct("shirt {enter}");
});

When("The user choose the product X", () => {
  addToCartAcction.chooseTheFirstProduct();
  cy.wait(3000);
});

When(
  "The user choose the size {string} and color {string} for product",
  (size, colorIndex) => {
    cy.wait(1500);
    addToCartAcction.chooseTheSizeAndColorForProduct(size, colorIndex);
  }
);

When("The user click on Add to cart button", () => {
  addToCartAcction.clickOnAddToCartButton();
});

Then(
  "The product should be added to the cart successfully with {string}",(message) => {
    cy.wait(3000);
    sharedAssertion.checkAlertMessageContainValue(message);
  }
);

Then("The counter of the cart should be visible", () => {
  addToCartAssertion.checkCounterOfTheCartVisible();
});
