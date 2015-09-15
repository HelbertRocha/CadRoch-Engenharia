/**
 * Created by Opstrup on 15/09/15.
 */
'use strict';

angular.module('docsys-phonegap', [])

  .factory('configServices', [function() {
    var configServices;
    var devMode = true;

    /**
     * This function returns information about the developer server
     * Dev sever is located at: http://jsonplaceholder.typicode.com/
     */
    this.getDevSever = function() {
      return {
        users: 'http://jsonplaceholder.typicode.com/users',
        photos: 'http://jsonplaceholder.typicode.com/photos'
      };
    };

    /**
     * This function returns information about the live server
     */
    this.getLiveServer = function() {

    };

    /**
     * Public method for getting the url for dev server or live server
     */
    configServices.getURL = function() {
      if(devMode)
        return this.getDevSever();
      return this.getLiveServer();
    };

    return configServices;
  }]);
