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

  it("should return dev url when devmode is on", function () {
    configServices.devMode = true;

    var devUrl = "http://localhost:3000/user";

    expect(configServices.getURL()['user']).toEqual(devUrl);
  });

  it("should return live url when devmode is off", function () {
    configServices.devMode = false;

    var devUrl = "liveServer";

    expect(configServices.getURL()['user']).toEqual(devUrl);
  });

});
