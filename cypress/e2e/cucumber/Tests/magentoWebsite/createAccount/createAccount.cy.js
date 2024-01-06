import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import createAccountPageActions from "../../../../../pageObjects/createAccountPage/actions.cy";
import createAccountPageAssertions from "../../../../../pageObjects/createAccountPage/assertions.cy";
import sharedAssertions from "../../../../../pageObjects/shared/assertions.cy";

const createAccountActions = new createAccountPageActions();
const firstName = "Rana";
const lastName = "slama";
const email = "Ranaslama" + Math.floor(Math.random() * 100) + "@gmail.com";
const password = "Ranaslama#45@";
const confirmPassword = "Ranaslama#45@";
const createAccountAssertions = new createAccountPageAssertions();
const sharedAssertion = new sharedAssertions();
Given("The user navigated to create account page", () => {
  createAccountActions.visitCreateAccountPage();
});

When("Type firstName in the field", () => {
  createAccountActions.typeInFirstNameField(firstName);
});
When("Type lastName in the field", () => {
  createAccountActions.typeInLastNameField(lastName);
});
When("Type email in the field", () => {
  createAccountActions.typeInEmailField(email);
});
When("Type password in the field", () => {
  createAccountActions.typeInPasswordField(password);
});
When("Type confirmPassword in the field", () => {
  createAccountActions.typeInConfirmPasswordField(confirmPassword);
});
When("Clicks on Create an account button", () => {
  createAccountActions.clicksOnCreateAccountButton();
});

Then("The Account should be created successfully", () => {
  createAccountAssertions.checkUrlEqualValue(
    "https://magento.softwaretestingboard.com/customer/account/"
  );
  createAccountAssertions.checkPageTitleContainValue("My Account");
});

Then("{string} message will be shown", (msg) => {
  sharedAssertion.checkAlertMessageContainValue(msg);
});
