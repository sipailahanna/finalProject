const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultsPage extends Page {
  get ratingStars() {
    return $$(`div.filters__rating__stars a span`);
  }

  get btnResults() {
    return $(`a#f-results`);
  }

  get rating() {
    return $(`div.b-product-title__rating meta[itemprop='ratingValue']`);
  }

  getCheckboxAvailability(checkboxName) {
    return $(`ul#ul_availability input[data-title='${checkboxName}']`);
  }
}

module.exports = new ResultsPage();
