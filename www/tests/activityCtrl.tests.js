/**
 * Created by Opstrup on 22/09/15.
 */
'use strict';

describe('docsys-phonegap.home module', function () {

  var scope, controller, mockUserServices, fakeUserAuthenticated, mockGpsLocationServices;
  var $q, queryDeferred;

  var fakeGpsLocation = {

  };

  fakeUserAuthenticated = {
    "id": 0,
    "username": "fakeUser0",
    "password": "password",
    "firstname": "Frederick",
    "lastname": "Pouros",
    "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
    "CPF": 252373492
  };

  beforeEach(module('ionic'));
  beforeEach(module('ui.router'));
  beforeEach(module('docsys-phonegap'));

  beforeEach(inject(function ($controller, $rootScope, _$q_) {
    scope = $rootScope.$new();
    $q = _$q_;

    mockUserServices = {
      setUser: function (user) { },
      getUser: function () { }
    };

    mockGpsLocationServices = {
      getLocation: function () {
        //queryDeferred = $q.defer();
        //return {$promise: queryDeferred.promise};
      }
    };

    controller = $controller('ActivityCtrl', {
      $scope: scope,
      userServices: mockUserServices,
      gpsLocationServices: mockGpsLocationServices
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

  it("should call getUser when controller gets instanciated", function () {
    spyOn(mockUserServices, 'getUser').and.callThrough();

    scope.init();
    expect(mockUserServices.getUser).toHaveBeenCalled();
  });

  it("should know .then function on gpsLocationServices", function () {
    spyOn(mockGpsLocationServices, 'getLocation').and.returnValue(true);


    expect(mockGpsLocationServices.getLocation()).toEqual(true);
  });

});
