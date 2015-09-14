/**
 * Created by Opstrup on 14/09/15.
 */

/**
 * Integration test file for home view controller
 */

describe('integration test of home view functionality', function() {

  beforeEach(function() {
    browser.get('http://localhost:8100/#/');
    element(by.id('newUserButton')).click();
  });

  it("have a username field", function () {

      var usernameInputField = element(by.id('usernameModelView'));
      expect(usernameInputField.isPresent()).toBeTruthy();
  });
});

