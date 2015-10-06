/**
 * Created by Opstrup on 22/09/15.
 */
'use strict';

describe('docsys-phonegap.activity controller', function () {

  var scope, controller, mockUserServices, fakeUserAuthenticated, mockGpsLocationServices;
  var $q, queryDeferred, $rootScope, $httpBackend, mockCameraServices;

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

  beforeEach(inject(function ($controller, _$rootScope_, _$q_) {
    scope = _$rootScope_.$new();
    $q = _$q_;
    $rootScope = _$rootScope_;

    mockUserServices = {
      setUser: function (user) { },
      getUser: function () { }
    };

    mockGpsLocationServices = {
      getLocation: function () {
        queryDeferred = $q.defer();
        return queryDeferred.promise;
      }
    };

    mockCameraServices = {
      getLocation: function () {
        queryDeferred = $q.defer();
        return queryDeferred.promise;
      }
    };

    controller = $controller('ActivityCtrl', {
      $scope: scope,
      userServices: mockUserServices,
      gpsLocationServices: mockGpsLocationServices,
      cameraServices: mockCameraServices
    });
  }));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('templates/loginView.html').respond(200, '');
    $httpBackend.whenGET('templates/activityView.html').respond(200, '');
    $httpBackend.whenGET('templates/createNewUserView.html').respond(200, '');
    $httpBackend.whenGET('templates/sideMenuView.html').respond(200, '');
    $httpBackend.whenGET('templates/settingsView.html').respond(200, '');
    $httpBackend.whenGET('translations/local-en_US.json').respond(200, '');
    $httpBackend.whenGET('translations/local-pt_BR.json').respond(200, '');
  }));

  it('should pass!', function () {
    expect(controller).toBeDefined();
  });

  it("should instantiate the user", function () {
    spyOn(mockUserServices, 'getUser').and.returnValue(fakeUserAuthenticated);
    var firstname = "Frederick";

    scope.init();
    expect(scope.user.firstname).toEqual(firstname);
  });

  it("should instantiate the picture of the user", function () {
    spyOn(mockUserServices, 'getUser').and.returnValue(fakeUserAuthenticated);
    var picture = "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg";

    scope.init();
    expect(scope.user.picture).toEqual(picture);
  });

  it("should call getUser when controller gets instanciated", function () {
    spyOn(mockUserServices, 'getUser').and.callThrough();

    scope.init();
    expect(mockUserServices.getUser).toHaveBeenCalled();
  });

  it("should know .then function on gpsLocationServices", function () {
    spyOn(mockGpsLocationServices, 'getLocation').and.callThrough();

    scope.logActivity();
    //queryDeferred.resolve();
    $rootScope.$apply();

    expect(mockGpsLocationServices.getLocation).toHaveBeenCalled();
  });

});
