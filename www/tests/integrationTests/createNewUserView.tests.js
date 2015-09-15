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

  it("should have a username field", function () {

      var usernameInputField = element(by.id('usernameModelView'));
      expect(usernameInputField.isPresent()).toBeTruthy();
  });

  it("should have a name field", function () {

    var nameInputField = element(by.id('nameModelView'));
    expect(nameInputField.isPresent()).toBeTruthy();
  });

  it("should have a surname field", function () {

    var surnameInputField = element(by.id('surnameModelView'));
    expect(surnameInputField.isPresent()).toBeTruthy();
  });

  it("should have a take picture button", function () {

    var pictureButton = element(by.id('pictureButtonModelView'));
    expect(pictureButton.isPresent()).toBeTruthy();
  });

  it("should have a create user button", function () {

    var createButton = element(by.id('createButtonModelView'));
    expect(createButton.isPresent()).toBeTruthy();
  });
});

