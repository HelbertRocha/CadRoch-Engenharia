/**
 * Created by Opstrup on 21/09/15.
 */

describe('userServices test', function () {

  var userServices;

  beforeEach(module('docsys-phonegap'));

  beforeEach(function() {

    inject(function($injector) {
      userServices = $injector.get('userServices');
    });
  });

  it('should pass!', function () {

    expect(userServices).toBeDefined();
  });

  it("should return false if user hasn't been set", function () {

    expect(userServices.getUser()).toEqual(false);
  });

  it("should return the user if user has been set", function () {

    var fakeUser = {
      "id": '5',
      "username": 'faker',
      "password": 'faker',
      "firstname": 'faker',
      "lastname": 'faker',
      "picture": 'faker'
    };

    userServices.setUser(fakeUser);

    expect(userServices.getUser()).toEqual(fakeUser);
  });

});
