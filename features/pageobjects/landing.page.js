const Page = require("./page");

class LandingPage extends Page {
  get linkEnter() {
    return $("a[href*=login][class*=top-panel]");
  }

  get errorOnLoginPopup() {
    return $(`div[style*='display: block'] div#test div.i-popover__line`);
  }

  get linkIamANewUser() {
    return $(`a#loginFormRegisterLink`);
  }

  get buttonRegister() {
    return $(`button[form=registerForm]`);
  }

  get inputEmail() {
    return $(`input[type=email][tabindex='1']`);
  }

  get inputPassword() {
    return $(`input[type=password].i-input`);
  }

  get buttonLogin() {
    return $(`button[type=submit][form=loginForm]`);
  }

  get inputSearch() {
    return $(`input#top-s`);
  }

  get bookCards() {
    return $$(`div.viewer-type-card__wrapper li div.item-type-card`);
  }

  get author() {
    return $(`div.b-product-title__author a`);
  }

  get paginationList() {
    return $(`ul.g-pagination__list`);
  }

  async goToPage(pageNumber) {
    let page = `ul.g-pagination__list li[data-value='${pageNumber}']`;
    await $(page).click();
  }

  getTabLinkFromLoginPopup(tabName) {
    let tabLocator = `a#loginFormLoginEmailLink[data-tab-link=${tabName}]`;
    return $(tabLocator);
  }

  async searchByAuthor(author) {
    await this.inputSearch.setValue(author);
    await browser.keys("Enter");
  }

  async searchFor(searchPhrase) {
    await this.inputSearch.setValue(searchPhrase);
    await browser.keys("Enter");
  }

  async enterCredentials(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.buttonLogin.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("");
  }
}

module.exports = new LandingPage();
