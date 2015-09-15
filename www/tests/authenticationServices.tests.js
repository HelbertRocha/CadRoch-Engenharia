/**
 * Created by Opstrup on 15/09/15.
 */

describe('authenticationServices test', function () {

  var authenticationServices;

  beforeEach(module('ngResource'));
  beforeEach(module('docsys-phonegap'));

  beforeEach(function() {

    inject(function($injector) {
      authenticationServices = $injector.get('authenticationServices');
    });
  });

  it('should pass!', function () {
    expect(authenticationServices).toBeDefined();
  });

});
