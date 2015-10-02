/**
 * Integration test file for home view controller
 */

describe('integration test of home view functionality', function() {

  var fakeuser = {username: "Username", password: "password", firstname: "firstname", lastname: "lastname"};

  beforeEach(function() {
    browser.get('http://localhost:8100/#/app/home');
  });

  it('should have a login text message', function() {

    var loginText = element(by.id('loginText'));
    expect(loginText.getText()).toContain('Login');
  });

  it('should have a login button', function() {

    var loginButton = element(by.id('loginButton'));
    expect(loginButton.isPresent()).toBeTruthy();
  });

  it('should have a username field', function() {

    var nameInputField = element(by.id('name'));
    expect(nameInputField.isPresent()).toBeTruthy();
  });

  it('should have a login button', function() {

    var passwordInputField = element(by.id('password'));
    expect(passwordInputField.isPresent()).toBeTruthy();
  });

  it("should have create new user button", function () {

    var createNewUserButton = element(by.id('newUserButton'));
    expect(createNewUserButton.isPresent()).toBeTruthy();
  });

  it("should show modal view when click on new user button", function () {

    element(by.id('newUserButton')).click();
    var title = element(by.id('titleModalView'));
    expect(title.getText()).toContain('New user');
  });

  it("should close the modal view when cancel is clicked", function () {

    element(by.id('newUserButton')).click();

    element(by.id('cancelButtonModalView')).click();
    var modalView = element(by.className('modal'));
    expect(modalView.isDisplayed()).toBeFalsy();
  });

  it("should show error msg if login btn is pressed with empty username and password", function () {
    element(by.id('loginButton')).click();

    var errorMessage = element(by.id('errorMessage'));
    expect(errorMessage.getAttribute('innerText')).toContain('Please fill out username and password');
  });

  it("should hide error msg if login btn is not pressed", function () {

    var errorMessage = element(by.id('errorMessage'));
    expect(errorMessage.getAttribute('innerText')).toContain('');
  });

  it("should hide error msg if login btn and username and password is filled out", function () {

    element(by.id('name')).sendKeys(fakeuser.username);
    element(by.id('password')).sendKeys(fakeuser.password);
    element(by.id('loginButton')).click();

    var errorMessage = element(by.id('errorMessage'));
    expect(errorMessage.getAttribute('innerText')).toContain('');
  });

  it("should redirect user to correct screen", function () {

    element(by.id('name')).sendKeys(fakeuser.username);
    element(by.id('password')).sendKeys(fakeuser.password);
    element(by.id('loginButton')).click();

    expect(browser.getLocationAbsUrl()).toMatch('/activity');
  });

  it("should clear error message correct, if user gets error msg and changes view and back again", function () {

    element(by.id('loginButton')).click();
    element(by.id('newUserButton')).click();
    element(by.id('cancelButtonModalView')).click();

    var errorMessage = element(by.id('errorMessage'));
    expect(errorMessage.isDisplayed()).toBeFalsy();
  });

  it("should show success message on successful creating new user", function () {

    element(by.id('newUserButton')).click();

    element(by.id('usernameModalView')).sendKeys('fake username');
    element(by.id('passwordModalView')).sendKeys('fake password');
    element(by.id('firstnameModalView')).sendKeys('fake name');
    element(by.id('lastnameModalView')).sendKeys('fake surname');

    element(by.id('createButtonModalView')).click();

    var successMessage = element(by.id('successMessage'));
    expect(successMessage.isDisplayed()).toBeTruthy();
  });
});

