/**
 * Created by Opstrup on 26/09/15.
 */

angular.module('docsys-phonegap')

  .factory('activityBackendApi', ['configServices', '$resource', function(configServices, $resource) {
    return $resource(configServices.baseUrl + configServices.activityEndpoint);
  }]);
