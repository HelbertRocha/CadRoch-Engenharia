/**
 * Created by Opstrup on 14/09/15.
 */

'use strict';

describe('docsys-phonegap.home module', function () {

  var scope, controller;

  beforeEach(module('ui.router'));
  beforeEach(module('docsys-phonegap.home'));

  beforeEach(inject(function ($rootScope, $controller) {

    scope = $rootScope.$new();

    controller = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should pass!', function () {
    expect(controller).toBeDefined();
  });

});
