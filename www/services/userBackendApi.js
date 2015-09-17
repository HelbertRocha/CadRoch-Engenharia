/**
 * Created by Opstrup on 16/09/15.
 */

angular.module('docsys-phonegap')

  .factory('userBackendApi', ['configServices', '$resource', function(configServices, $resource) {
    return $resource('http://localhost:3000/user');
  }]);
