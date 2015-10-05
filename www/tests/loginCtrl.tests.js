/**
 * Created by Opstrup on 14/09/15.
 */

'use strict';

describe('docsys-phonegap.login controller', function () {

  var scope, controller, mockAuthenticationServices, mockUserBackendApi, $q, $rootScope, queryDeferred, mockFileTransferServices;
  var mockUserServices, mockLoginBackendApi, $httpBackend;

  beforeEach(module('ionic'));
  beforeEach(module('ui.router'));
  beforeEach(module('ngCordova'));
  beforeEach(module('docsys-phonegap'));

  beforeEach(inject(function(_$q_, _$rootScope_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function ($controller) {
    scope = $rootScope.$new();



    mockUserServices = {
      setUser: function(user) { },
      getUser: function() { }
    };

    mockUserBackendApi = {
      query: function() {
        queryDeferred = $q.defer();
        return {$promise: queryDeferred.promise};
      },
      save: function() { }
    };

    mockFileTransferServices = {
      uploadPicture: function(path, picture) { }
    };

    controller = $controller('LoginCtrl', {
      $scope: scope,
      userBackendApi: mockUserBackendApi,
      fileTransferServices: mockFileTransferServices,
      userServices: mockUserServices,
      loginBackendApi: mockLoginBackendApi
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

  it("should call init function and update $scope", function () {
    expect(scope.errorMessage).toEqual('');
  });

  it("should show error msg when function is called", function () {
    scope.showErrorMessage("fake error msg");

    expect(scope.errorMessage).toEqual("fake error msg");
  });

  it("should show error msg when user clicks login with empty username and password", function () {
    scope.logIn();

    var errorMsg = "Please fill out username and password";
    expect(scope.errorMessage).toEqual(errorMsg);
  });

  it("should not create post when new user info is not filled out", function () {
    spyOn(mockUserBackendApi, 'save').and.callThrough();

    scope.newuser = {};

    scope.createNewUser();

    expect(mockUserBackendApi.save).not.toHaveBeenCalled();
  });

  it("should not create post when new user info is not completely filled out", function () {
    spyOn(mockUserBackendApi, 'save').and.callThrough();

    scope.newuser = { usernamer: "user", firstname: "name", lastname: "lastname" };

    scope.createNewUser();

    expect(mockUserBackendApi.save).not.toHaveBeenCalled();
  });

  /*it("should call post when a user gets created", function () {
    spyOn(mockUserBackendApi, 'save').and.callThrough();
    spyOn(mockFileTransferServices, 'uploadPicture').and.returnValue(true);
    spyOn(mockAuthenticationServices, 'authenticateNewUser').and.returnValue(true);
    spyOn(scope, 'hideCreateNewUserView').and.returnValue(true);

    scope.newuser = { usernamer: "user", password: "password", firstname: "name", lastname: "lastname", picture: "blablabla" };

    scope.createNewUser();

    expect(mockUserBackendApi.save).toHaveBeenCalled();
  });

  it("should call post when a user gets created", function () {
    spyOn(mockUserBackendApi, 'save').and.callThrough();
    spyOn(mockFileTransferServices, 'uploadPicture').and.returnValue(true);
    spyOn(mockAuthenticationServices, 'authenticateNewUser').and.returnValue(true);
    spyOn(scope, 'hideCreateNewUserView').and.returnValue(true);

    scope.newuser = { usernamer: "user", password: "password", firstname: "name", lastname: "lastname", picture: "blablabla" };

    scope.createNewUser();

    expect(mockUserBackendApi.save).toHaveBeenCalledWith(scope.newuser);
  });*/
});
