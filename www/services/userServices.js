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
      "picture": null
    };

    return {
      setUser: function(setUser) {
        _user.id = setUser.id;
        _user.username = setUser.username;
        _user.password = setUser.password;
        _user.firstname = setUser.firstname;
        _user.lastname = setUser.lastname;
        _user.picture = setUser.picture;
      },

      getUser: function() {
        if(_user["username"] != null)
          return _user;

        return false;
      }
    }

  }]);
