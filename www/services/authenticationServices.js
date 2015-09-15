/**
 * Created by Opstrup on 15/09/15.
 */
'use strict';

angular.module('docsys-phonegap', [])

.factory('authenticationServices', ['$resource', 'configServices', function($resource, configServices) {

    var authenticationServices;

    /**
     * This function checks with the backend if the user is authenticated.
     * @param username
     * @param password
     * @param picture
     * @returns {boolean} true if authenticated / false if not authenticated
     */
    authenticationServices.isUserAuthenticated = function(username, password, picture) {

      var userIsAuthenticated = false;

      var user = $resource()

      if (userIsAuthenticated) {
        return true;
      }
      return false;
    };

    return authenticationServices;

  }]);
