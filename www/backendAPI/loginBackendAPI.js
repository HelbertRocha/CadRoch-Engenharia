/**
 * Created by Opstrup on 02/10/2015.
 */

angular.module('docsys-phonegap')

  .factory('loginBackendApi', ['configServices', '$resource', function(configServices, $resource) {
    return $resource(configServices.baseUrl + configServices.loginEndpoint);
  }]);
