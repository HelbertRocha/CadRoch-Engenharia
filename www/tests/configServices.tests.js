/**
 * Created by Opstrup on 15/09/15.
 */

describe('configServices test', function () {

  var configServices;

  beforeEach(module('ngResource'));
  beforeEach(module('docsys-phonegap'));

  beforeEach(function() {

    inject(function($injector) {
      configServices = $injector.get('configServices');
    });
  });

  it('should pass!', function () {
    expect(configServices).toBeDefined();
  });

  it("should return base url to server", function () {
    var baseUrl = configServices.baseUrl;

    expect(baseUrl).toEqual('http://192.168.1.46/docsys/public/');
  });

});
