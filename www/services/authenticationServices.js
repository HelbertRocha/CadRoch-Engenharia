/**
 * Created by Opstrup on 15/09/15.
 */
'use strict';

angular.module('docsys-phonegap')

  .factory('authenticationServices', [ 'userServices', function(userServices) {

    /**
     * This function checks with the backend if the user is authenticated.
     * If the user is authenticated the singleton userServices is set.
     * @param username
     * @param password
     * @param picture
     * @returns {boolean} true if authenticated / false if not authenticated
     */
    var isUserAuthenticated = function(userList, user) {
      for (var i = 0; i <= userList.length-1; i++) {
        if (userList[i]["username"] == user["username"]) {
          if (userList[i]["password"] == user["password"]) {
            userServices.setUser(userList[i]);
            return true;
          }
        }
      }
      return false;
    };

    // @todo add better authentication here
    var autehnticateNewUser = function(user) {
      if(user.username && user.password && user.name && user.lastname)
      {
        return true;
      }
      return false;
    };

    return {
      isUserAuthenticated: isUserAuthenticated,
      autehnticateNewUser: autehnticateNewUser
    };

  }]);
