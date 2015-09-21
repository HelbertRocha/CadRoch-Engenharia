/**
 * Created by Opstrup on 14/09/15.
 */

/**
 * Integration test file for home view controller
 */

var width = 400;
var height = 800;
browser.driver.manage().window().setSize(width, height);

describe('integration test of home view functionality', function() {

  beforeEach(function() {
    browser.get('http://localhost:8100/#/');
    element(by.id('newUserButton')).click();
  });

  it("should have a username field", function () {

      var usernameInputField = element(by.id('usernameModalView'));
      expect(usernameInputField.isPresent()).toBeTruthy();
  });

  it("should have password field", function () {

    var cancelButton = element(by.id('passwordModalView'));
    expect(cancelButton.isPresent()).toBeTruthy();
  });

  it("should have a name field", function () {

    var nameInputField = element(by.id('firstnameModalView'));
    expect(nameInputField.isPresent()).toBeTruthy();
  });

  it("should have a surname field", function () {

    var surnameInputField = element(by.id('lastnameModalView'));
    expect(surnameInputField.isPresent()).toBeTruthy();
  });

  it("should have a take picture button", function () {

    var pictureButton = element(by.id('pictureButtonModalView'));
    expect(pictureButton.isPresent()).toBeTruthy();
  });

  it("should have a create user button", function () {

    var createButton = element(by.id('createButtonModalView'));
    expect(createButton.isPresent()).toBeTruthy();
  });

  it("should have a cancel button", function () {

    var cancelButton = element(by.id('cancelButtonModalView'));
    expect(cancelButton.isPresent()).toBeTruthy();
  });

  it("should show error msg if create new user form isn't filled out correct", function () {

    element(by.id('usernameModalView')).sendKeys('fakeuser');
    element(by.id('firstnameModalView')).sendKeys('fakeusername');
    element(by.id('createButtonModalView')).click();

    var errorMessage = element(by.id('modalErrorMessage'));
    expect(errorMessage.getAttribute('innerText')).toContain('Please fill all fields');
  });

  it("should clear error message correct, if user gets error msg and changes view and back again", function () {

    element(by.id('createButtonModalView')).click();
    element(by.id('cancelButtonModalView')).click();
    element(by.id('newUserButton')).click();

    var modalErrorMessage = element(by.id('modalErrorMessage'));
    expect(modalErrorMessage.isDisplayed()).toBeFalsy();
  });

  it("should close modal view when clicking on close button", function () {

    element(by.id('cancelButtonModalView')).click();

    expect(element(by.id('createButtonModalView')).isDisplayed()).toBeFalsy();
  });

  it("should close modal view if input fields is filled out", function () {

    element(by.id('usernameModalView')).sendKeys('fake username');
    element(by.id('passwordModalView')).sendKeys('fake password');
    element(by.id('firstnameModalView')).sendKeys('fake name');
    element(by.id('lastnameModalView')).sendKeys('fake surname');

    element(by.id('createButtonModalView')).click();

    expect(element(by.id('createButtonModalView')).isDisplayed()).toBeFalsy();
  });
});

