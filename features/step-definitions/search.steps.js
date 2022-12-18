const { When, Then } = require("@wdio/cucumber-framework");

const landingPage = require("../pageobjects/landing.page");

When(/^I search by author with name (.*)$/, async (author) => {
  await landingPage.searchByAuthor(author);
});

When(/^I search for (.*)$/, async (searchPhrase) => {
  await landingPage.searchFor(searchPhrase);
});

When(/^I open the (\d+)st book card$/, async (bookIndex) => {
  await landingPage.bookCards[bookIndex].click();
});

Then(/^I should see the book by (.*)$/, function (authorName) {
  expect(landingPage.author).toBeDisplayed();
  expect(landingPage.author).toHaveText(authorName);
});

Then(/^I should see a pagination is present on the page$/, function () {
  expect(landingPage.paginationList).toBeDisplayed();
});

When(/^I navigate to (\d+) page$/, async (pageNumber) => {
  await landingPage.goToPage(pageNumber);
});

Then(/^I should land on (\d+) page$/, async (pageNumber) => {
  const url = await browser.getUrl();
  expect(url).toContain(`page=${pageNumber}`);
});
