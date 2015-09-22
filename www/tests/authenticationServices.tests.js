/**
 * Created by Opstrup on 15/09/15.
 */

describe('authenticationServices test', function () {

  var authenticationServices, fakeUserList, mockUserServices;

  beforeEach(module('ngResource'));
  beforeEach(module('docsys-phonegap'));

  beforeEach(function () {

    mockUserServices = {
      setUser: function (user) { },
      getUser: function () { }
    };

    module(function ($provide) {
      $provide.value('userServices', mockUserServices);
    });

  });

  beforeEach(function() {
    inject(function(_authenticationServices_) {
      authenticationServices = _authenticationServices_;
    });
  });

  beforeEach(function() {
    fakeUserList = [
      {
        "id": 0,
        "username": "fakeUser0",
        "password": "password",
        "firstname": "Frederick",
        "lastname": "Pouros",
        "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
        "CPF": 252373492
      },
      {
        "id": 1,
        "username": "fakeUser1",
        "password": "password",
        "firstname": "Nikki",
        "lastname": "Langosh",
        "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/seyedhossein1/128.jpg",
        "CPF": 252373492
      },
      {
        "id": 2,
        "username": "fakeUser2",
        "password": "password",
        "firstname": "Jeanne",
        "lastname": "Turner",
        "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/chrismj83/128.jpg",
        "CPF": 252373492
      },
      {
        "id": 3,
        "username": "fakeUser3",
        "password": "password",
        "firstname": "Sienna",
        "lastname": "Mann",
        "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/colirpixoil/128.jpg",
        "CPF": 252373492
      }
    ]
  });

  it('should pass!', function () {
    expect(authenticationServices).toBeDefined();
  });

  it("should return true if the user is found in the list", function () {
    var fakeUser = {
      "id": 0,
      "username": "fakeUser0",
      "password": "password",
      "firstname": "Frederick",
      "lastname": "Pouros",
      "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
      "CPF": 252373492
    };

    var authenticationServicesResponse = authenticationServices.isUserAuthenticated(fakeUserList, fakeUser);

    expect(authenticationServicesResponse).toEqual(true);
  });

  it("should return false if the username is not found in the list", function () {
    var notAuthenticatedFakeUser = {
      "id": 0,
      "username": "bad_guy",
      "password": "password",
      "firstname": "Frederick",
      "lastname": "Pouros",
      "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
      "CPF": 252373492
    };

    var authenticationServicesResponse = authenticationServices.isUserAuthenticated(fakeUserList, notAuthenticatedFakeUser);

    expect(authenticationServicesResponse).toEqual(false);
  });

  it("should return false if user entered wrong password", function () {
    var notAuthenticatedFakeUser = {
      "id": 0,
      "username": "fakeUser0",
      "password": "bad_password",
      "firstname": "Frederick",
      "lastname": "Pouros",
      "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
      "CPF": 252373492
    };

    var authenticationServicesResponse = authenticationServices.isUserAuthenticated(fakeUserList, notAuthenticatedFakeUser);

    expect(authenticationServicesResponse).toEqual(false);
  });

  it("should return true if all input fields is filled out in create new user view", function () {

    var fakeUser = {
      "username": "fakeUser0",
      "password": "password",
      "name": "Frederick",
      "lastname": "Pouros"
    };

    var authenticationServicesResponse = authenticationServices.autehnticateNewUser(fakeUser);

    expect(authenticationServicesResponse).toEqual(true);
  });

  it("should return false if not all input fields is filled out in create new user view", function () {

    var fakeUser = {
      "username": "fakeUser0",
      "name": "Frederick",
      "lastname": "Pouros"
    };

    var authenticationServicesResponse = authenticationServices.autehnticateNewUser(fakeUser);

    expect(authenticationServicesResponse).toEqual(false);
  });

  it("Test", function () {
    spyOn(mockUserServices, 'setUser').and.returnValue(true);

    var fakeUser = {
      "id": 0,
      "username": "fakeUser0",
      "password": "password",
      "firstname": "Frederick",
      "lastname": "Pouros",
      "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
      "CPF": 252373492
    };
    var result = authenticationServices.isUserAuthenticated(fakeUserList, fakeUser);

    expect(result).toEqual(true);
  });
});
