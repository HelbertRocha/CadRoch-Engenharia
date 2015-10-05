/**
 * Created by Opstrup on 05/10/2015.
 */

'use strict';

describe('docsys-phonegap.settings controller', function () {

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

    controller = $controller('SettingsCtrl', {
      $scope: scope
    });
  }));

  it('should pass!', function () {
    expect(controller).toBeDefined();
  });

  it("should have english lang activated", function () {
    scope.init();

    expect(scope.englishActivated).toBe(true);
  });

  it("should change lang when function is called", function () {
    scope.init();
    scope.changeLanguage('pr_BR');

    expect(scope.englishActivated).not.toBe(true);
  });

  it("should change lang to english when english is selected", function () {
    scope.init();
    scope.changeLanguage('en_US');

    expect(scope.englishActivated).toBe(true);
  });

});
