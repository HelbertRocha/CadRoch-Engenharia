/*
/!**
 * Created by Opstrup on 15/09/15.
 *!/

describe('authenticationServices test', function () {

  var authenticationServices, fakeUserList, fakeUserAuthenticated, fakeUserNotAuthenticated;
  var fakeUserNotAuthenticatedBadPassword, fakeNewUser, fakeNewBadUser;
  var mockUserBackendApi, mockUserServices, queryDeferred, $q, $rootScope, $httpBackend;

  beforeEach(module('ngResource'));
  beforeEach(module('docsys-phonegap'));

  beforeEach(function () {

    mockUserServices = {
      setUser: function (user) { },
      getUser: function () { }
    };

    mockUserBackendApi = {
      query: function () {
        queryDeferred = $q.defer();
        return {$promise: queryDeferred.promise};
      },
      save: function () {

      }
    };

    module(function ($provide) {
      $provide.value('userServices', mockUserServices);
      $provide.value('userBackendApi', mockUserBackendApi);
    });

  });

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


  beforeEach(inject(function(_$q_, _authenticationServices_, _$rootScope_) {
    $q = _$q_;
    authenticationServices = _authenticationServices_;
    $rootScope = _$rootScope_;
  }));



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
    ];

    fakeUserAuthenticated = {
      "id": 0,
      "username": "fakeUser0",
      "password": "password",
      "firstname": "Frederick",
      "lastname": "Pouros",
      "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
      "CPF": 252373492
    };

    fakeUserNotAuthenticated = {
      "id": 0,
        "username": "bad_guy",
        "password": "password",
        "firstname": "Frederick",
        "lastname": "Pouros",
        "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
        "CPF": 252373492
    };

    fakeUserNotAuthenticatedBadPassword = {
      "id": 0,
      "username": "fakeUser0",
      "password": "bad_password",
      "firstname": "Frederick",
      "lastname": "Pouros",
      "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
      "CPF": 252373492
    };

    fakeNewUser = {
      "username": "fakeUser0",
      "password": "password",
      "name": "Frederick",
      "lastname": "Pouros"
    };

    fakeNewBadUser = {
      "username": "fakeUser0",
      "name": "Frederick",
      "lastname": "Pouros"
    };

  });

  it('should pass!', function () {
    expect(authenticationServices).toBeDefined();
  });

  it("should have defined the mocks", function () {
    expect(mockUserBackendApi).toBeDefined();
  });

  it("should have defined the mocks", function () {
    expect(mockUserServices).toBeDefined();
  });

  it("should call UserBackendApi when trying to log in", function () {
    spyOn(mockUserBackendApi, 'query').and.callThrough();
    authenticationServices.isUserAuthenticated(fakeUserAuthenticated);

    expect(mockUserBackendApi.query).toHaveBeenCalled();
  });

  it("should return true if the user is authenticated", function () {
    spyOn(mockUserBackendApi, 'query').and.callThrough();
    var result = authenticationServices.isUserAuthenticated(fakeUserAuthenticated);

    queryDeferred.resolve(fakeUserList);
    $rootScope.$apply();

    expect(result).toEqual(true);
  });

    it("should return false if the user is not authenticated", function () {
      spyOn(mockUserBackendApi, 'query').and.callThrough();
      var result = authenticationServices.isUserAuthenticated(fakeUserNotAuthenticated);

      queryDeferred.resolve(fakeUserList);
      $rootScope.$apply();

      expect(result).toEqual(false);
    });

    /!*it("should return false if user entered wrong password", function () {
      var authenticationServicesResponse = authenticationServices.isUserAuthenticated(fakeUserList, fakeUserNotAuthenticatedBadPassword);

      expect(authenticationServicesResponse).toEqual(false);
    });

    it("should return true if all input fields is filled out in create new user view", function () {
      var authenticationServicesResponse = authenticationServices.authenticateNewUser(fakeNewUser);

      expect(authenticationServicesResponse).toEqual(true);
    });

    it("should return false if not all input fields is filled out in create new user view", function () {
      var authenticationServicesResponse = authenticationServices.authenticateNewUser(fakeNewBadUser);

      expect(authenticationServicesResponse).toEqual(false);
    });

    it("should return true if the user i authenticated", function () {
      spyOn(mockUserServices, 'setUser').and.returnValue(true);

      var result = authenticationServices.isUserAuthenticated(fakeUserList, fakeUserAuthenticated);

      expect(result).toEqual(true);
    });

    it("should call userServices with to correct data", function () {
      spyOn(mockUserServices, 'setUser').and.callThrough();

      authenticationServices.isUserAuthenticated(fakeUserList, fakeUserAuthenticated);

      expect(mockUserServices.setUser).toHaveBeenCalledWith(fakeUserAuthenticated);
    });*!/

  it("should use the backendApi when isUserAuthenticated is called", function () {
    spyOn(mockUserBackendApi, 'query').and.callThrough();

    authenticationServices.isUserAuthenticated(fakeUserList, fakeUserNotAuthenticated);

    expect(mockUserBackendApi.query).toHaveBeenCalled();
  });
});
*/
