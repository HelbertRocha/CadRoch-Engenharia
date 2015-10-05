/**
 * Created by Opstrup on 05/10/2015.
 */

/**
 * Created by Opstrup on 05/10/2015.
 */

describe('gspLocationServices test', function () {

  var gpsLocationServices;

  beforeEach(module('ngResource'));
  beforeEach(module('docsys-phonegap'));

  beforeEach(function() {

    inject(function($injector) {
      gpsLocationServices = $injector.get('gpsLocationServices');
    });
  });

  it('should pass!', function () {
    expect(gpsLocationServices).toBeDefined();
  });

});
