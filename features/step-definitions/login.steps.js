const { Given, When, Then } = require("@wdio/cucumber-framework");

const landingPage = require("../pageobjects/landing.page");

const pages = {
  landing: landingPage,
};

const links = {
  iAmANewUser: landingPage.linkIamANewUser,
  email: landingPage.getTabLinkFromLoginPopup("email"),
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

Given(/^I open login popup$/, async () => {
  await landingPage.linkEnter.click();
});

Then(/^I should see next options for login$/, function (table) {
  const tabs = table.rows();
  tabs.forEach((tabName) => {
    const tabLink = landingPage.getTabLinkFromLoginPopup(tabName);
    expect(tabLink).toBeExisting();
    expect(tabLink).toBeClickable();
  });
});

When(/^I click on "([^"]*)" link$/, async (link) => {
  await links[link].click();
});

Then(/^I land on registration form$/, function () {
  expect(landingPage.buttonRegister).toBeExisting();
  expect(landingPage.buttonRegister).toBeClickable();
});

When(/^I enter next credentials:$/, async (table) => {
  const testData = table.rowsHash();
  await landingPage.enterCredentials(testData.email, testData.password);
});

Then(/^I should see error message saying "([^"]*)"$/, function (errorMessage) {
  expect(landingPage.errorOnLoginPopup).toBeDisplayed();
  expect(landingPage.errorOnLoginPopup).toHaveText(errorMessage);
});
