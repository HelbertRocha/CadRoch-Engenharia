/**
 * Created by Opstrup on 17/09/15.
 */
/**
 * Integration test file for activity view controller
 */

describe('integration test of activity view functionality', function() {

  beforeEach(function() {
    browser.get('http://localhost:8100/#/activity');
  });

  it('should have Docsys as title', function() {

    var title = element(by.className('title'));
    expect(title.getText()).toContain('Activities');
  });

  it("should have the correct url", function () {

    expect(browser.getLocationAbsUrl()).toMatch('/activity');
  });

  it("should have user information field", function () {

    var userInformationFireld = element(by.id('userInformation'));

    expect(userInformationFireld.isDisplayed()).toBeTruthy();
  });

  it("should have a list with activities", function () {

    var activityList = element(by.id('activityList'));

    expect(activityList.isDisplayed()).toBeTruthy();
  });

  it("should have four elements in the list", function () {

    element.all(by.className('item-icon-left')).then(function(items) {
      expect(items.length).toBe(4);
      //expect(items[0].getText()).toBe('First');
    });
  });

  it("should have four elements in the list", function () {

    element.all(by.className('item-icon-left')).then(function(items) {
      expect(items[0].getText()).toBe('Check in at work');
      expect(items[1].getText()).toBe('Check out for lunch');
      expect(items[2].getText()).toBe('Check in after lunch');
      expect(items[3].getText()).toBe('Check out from work');
    });
  });
});

