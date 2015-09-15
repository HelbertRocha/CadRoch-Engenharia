/**
 * Created by Opstrup on 15/09/15.
 */
'use strict';

angular.module('docsys-phonegap')

  .factory('authenticationServices', [function() {

    /**
     * This function checks with the backend if the user is authenticated.
     * @param username
     * @param password
     * @param picture
     * @returns {boolean} true if authenticated / false if not authenticated
     */
    var isUserAuthenticated = function(username, password, picture) {

      var userIsAuthenticated = false;

      if (userIsAuthenticated) {
        return true;
      }
      return false;
    };

    return {
      isUserAuthenticated: isUserAuthenticated
    };

  }]);
