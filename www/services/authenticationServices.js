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
    var isUserAuthenticated = function(userList, user) {
      for (var i = 0; i <= userList.length-1; i++) {
        if (userList[i]["username"] == user["username"]) {
          if (userList[i]["password"] == user["password"]) {
            return true;
          }
        }
      }
      return false;
    };


    var autehnticateNewUser = function(user) {
      if(user.username && user.password && user.name && user.surename)
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
