/**
 * Created by Opstrup on 15/09/15.
 */
'use strict';

angular.module('docsys-phonegap')

  .factory('authenticationServices', [ 'userBackendApi', 'userServices', 'loginBackendApi', function(userBackendApi ,userServices, loginBackendApi) {

    /**
     * This function checks with the backend if the user is authenticated.
     * If the user is authenticated the singleton userServices is set.
     * @param username
     * @param password
     * @param picture
     * @returns {boolean} true if authenticated / false if not authenticated
     */
    var isUserAuthenticated = function(user) {
      var result = false;
      var userIsFound = false;

      loginBackendApi.save(user).$promise.then(function(responde) {

        if(!responde.error) {
          /*Set user*/
          result = true;
        }
      });
      return result;
    };

    // @todo add better authentication here
    var authenticateNewUser = function(user) {
      if(user.username && user.password && user.name && user.lastname)
      {
        return true;
      }
      return false;
    };

    return {
      isUserAuthenticated: isUserAuthenticated,
      authenticateNewUser: authenticateNewUser
    };

  }]);
