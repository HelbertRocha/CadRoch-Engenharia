/**
 * Created by Opstrup on 27/09/15.
 */

angular.module('docsys-phonegap')

  .factory('gpsLocationServices', ['$cordovaGeolocation', function($cordovaGeolocation) {

    var options = {timeout: 10000, enableHighAccuracy: false};

    return {

      getLocation: function() {
          return $cordovaGeolocation.getCurrentPosition(options);
      }
    };

  }]);
