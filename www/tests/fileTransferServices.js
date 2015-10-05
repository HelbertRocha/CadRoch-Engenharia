/**
 * Created by Opstrup on 05/10/2015.
 */

/**
 * Created by Opstrup on 05/10/2015.
 */

describe('fileTransferServices test', function () {

  var fileTransferServices;

  beforeEach(module('ngResource'));
  beforeEach(module('docsys-phonegap'));

  beforeEach(function() {

    inject(function($injector) {
      fileTransferServices = $injector.get('fileTransferServices');
    });
  });

  it('should pass!', function () {
    expect(fileTransferServices).toBeDefined();
  });

});
