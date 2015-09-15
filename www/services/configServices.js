/**
 * Created by Opstrup on 15/09/15.
 */
'use strict';

angular.module('docsys-phonegap')

  .factory('configServices', [function() {
    this.devMode = true;

    /**
     * This function returns information about the developer server
     * Dev sever is located at: http://jsonplaceholder.typicode.com/
     */
    var getDevSever = function() {
      return {
        user: 'http://localhost:3000/user'
      };
    };

    /**
     * This function returns information about the live server
     */
    var getLiveServer = function() {
      return {
        user: 'liveServer'
      };
    };

    /**
     * Public method for getting the url for dev server or live server
     */
    var getURL = function() {
      if(this.devMode)
        return getDevSever();
      return getLiveServer();
    };

    /**
     * Returns the public methods and variables for the configServices
     */
    return {
      getURL: getURL,
      devMode: this.devMode
    };
  }]);
