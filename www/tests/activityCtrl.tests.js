/**
 * Created by Opstrup on 22/09/15.
 */
'use strict';

describe('docsys-phonegap.home module', function () {

  var scope, controller, mockUserServices, fakeUserAuthenticated;

  beforeEach(module('ionic'));
  beforeEach(module('ui.router'));
  beforeEach(module('docsys-phonegap'));

  beforeEach(function() {

  fakeUserAuthenticated = {
      "id": 0,
      "username": "fakeUser0",
      "password": "password",
      "firstname": "Frederick",
      "lastname": "Pouros",
      "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
      "CPF": 252373492
    };
  });

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    mockUserServices = {
      setUser: function (user) { },
      getUser: function () { }
    };

    controller = $controller('ActivityCtrl', {
      $scope: scope,
      userServices: mockUserServices
    });
  }));

  it('should pass!', function () {
    expect(controller).toBeDefined();
  });

  it("should instantiate the user", function () {
    spyOn(mockUserServices, 'getUser').and.returnValue(fakeUserAuthenticated);
    var firstname = "Frederick";

    scope.init();
    expect(scope.user['firstname']).toEqual(firstname);
  });

  it("should instantiate the picture of the user", function () {
    spyOn(mockUserServices, 'getUser').and.returnValue(fakeUserAuthenticated);
    var picture = "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg";

    scope.init();
    expect(scope.user['picture']).toEqual(picture);
  });

});
