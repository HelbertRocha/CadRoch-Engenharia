/**
 * Created by Opstrup on 14/09/15.
 */

'use strict';

describe('docsys-phonegap.home module', function () {

  var scope, controller, mockAuthenticationServices, mockUserBackendApi;

  beforeEach(module('ionic'));
  beforeEach(module('ui.router'));
  beforeEach(module('docsys-phonegap'));

  beforeEach(inject(function ($rootScope, $controller) {

    scope = $rootScope.$new();

    mockAuthenticationServices = {

    };

    mockUserBackendApi = {

    };

      controller = $controller('HomeCtrl', {
      $scope: scope,
      authenticationServices: mockAuthenticationServices,
      userBackendApi: mockUserBackendApi
      });
  }));

  it('should pass!', function () {
    expect(controller).toBeDefined();
  });


});
