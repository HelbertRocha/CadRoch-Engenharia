/**
 * Created by Opstrup on 21/09/15.
 */

angular.module('docsys-phonegap')

  .factory('userServices', [function() {
    var _user = {
      "id": null,
      "username": null,
      "email": null,
      "authorizationKey": null
    };

    /*@todo save user to local storage here*/
    return {
      setUser: function(user) {
        _user.id = user.id_usuario;
        _user.username = user.nome_usuario;
        _user.email = user.email_usuario;
        _user.authorizationKey = user.authorization_key;
      },

      getUser: function() {
        if(_user.username != null)
          return _user;

        return false;
      }
    }

  }]);
