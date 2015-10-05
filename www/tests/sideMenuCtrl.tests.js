/**
 * Created by Opstrup on 05/10/2015.
 */

'use strict';

describe('docsys-phonegap.sidemenu controller', function () {

  var scope, controller, $q, $rootScope;

  beforeEach(module('ionic'));
  beforeEach(module('ui.router'));
  beforeEach(module('ngCordova'));
  beforeEach(module('docsys-phonegap'));

  beforeEach(inject(function (_$q_, _$rootScope_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function ($controller) {
    scope = $rootScope.$new();

    controller = $controller('SideMenuCtrl', {
      $scope: scope
    });
  }));

  it('should pass!', function () {
    expect(controller).toBeDefined();
  });

});
