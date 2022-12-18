const { When, Then } = require("@wdio/cucumber-framework");

const resultsPage = require("../pageobjects/results.page");

When(/^I filter by rating with value (\d+)$/, async () => {
  const element = await resultsPage.ratingStars[3];
  await browser.execute("arguments[0].click();", element);
  await resultsPage.btnResults.click();
});

Then(/^I should see that results have (\d+) rating$/, function (starNumber) {
  expect(resultsPage.rating).toHaveAttributeContaining(
    "content",
    `${starNumber},00`
  );
});
Then(/^I should see checkbox "([^"]*)" is selected$/, async (checkboxName) => {
  expect(resultsPage.getCheckboxAvailability(checkboxName)).toBeDisplayed();
});
