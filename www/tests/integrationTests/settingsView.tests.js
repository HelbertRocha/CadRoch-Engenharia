/**
 * Created by Opstrup on 01/10/15.
 */

/**
 * Integration test file for settings view controller
 */

describe('integration test of settings view functionality', function() {


  beforeEach(function() {
    browser.get('http://localhost:8100/#/app/settings');
  });

  it("should contain a list different languages options", function () {

    element.all(by.className('item-icon-right')).then(function(items) {
      expect(items.length).not.toEqual(0);
    });
  });

  it("should have a header for language list", function () {

    expect(element(by.className('item-divider')).isDisplayed());
  });

  it("should mark english as standard language", function () {

    expect(!element(by.className('englishSelection')).isDisplayed());
  });

  it("should mark selected language", function () {

    element(by.id('portugueseSelectionBtn')).click();
    expect(element(by.className('portugueseSelection')).isDisplayed());
  });

});

