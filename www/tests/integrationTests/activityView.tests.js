/**
 * Created by Opstrup on 17/09/15.
 */
/**
 * Integration test file for activity view controller
 */

describe('integration test of activity view functionality', function() {

  var fakeuser = {username: "Username", password: "password", firstname: "firstname", lastname: "lastname"};

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

  it("should have undefined user information field if no user is logged in", function () {

    var userInformationFireld = element(by.id('undefinedUserInformation'));
    expect(userInformationFireld.isDisplayed()).toBeTruthy();
  });

  it("should have a list with activities", function () {

    var activityList = element(by.id('activityList'));
    expect(activityList.isDisplayed()).toBeTruthy();
  });

  it("should have four elements in the list", function () {

    element.all(by.className('item-icon-left')).then(function(items) {
      expect(items.length).toBe(4);
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

  it("should show John Doe user if now user is logged in", function () {

    var nameLabel = element(by.className('nameLabel'));
    expect(nameLabel.getText()).toBe('John Doe');
  });

  it("should have user information field if user is logged in", function () {

    browser.get('http://localhost:8100/#/');

    element(by.id('name')).sendKeys(fakeuser.username);
    element(by.id('password')).sendKeys(fakeuser.password);
    element(by.id('loginButton')).click();

    var nameLabel = element(by.className('nameLabel'));
    expect(nameLabel.getText()).not.toBe('John Doe');
  });
});

