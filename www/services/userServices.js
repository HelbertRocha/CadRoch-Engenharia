/**
 * Created by Opstrup on 21/09/15.
 */

angular.module('docsys-phonegap')

  .factory('userServices', [function() {
    var _user = {
      "id": null,
      "username": null,
      "password": null,
      "firstname": null,
      "lastname": null,
      "picture": null,
      "authorizationKey": null
    };

    return {
      setUser: function(user) {
        _user.id = user.id;
        _user.username = user.username;
        _user.password = user.password;
        _user.firstname = user.firstname;
        _user.lastname = user.lastname;
        _user.picture = user.picture;
        _user.authorizationKey = user.authorizationKey;
      },

      getUser: function() {
        if(_user["username"] != null)
          return _user;

        return false;
      }
    }

  }]);
