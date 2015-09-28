/**
 * Created by Opstrup on 26/09/15.
 */

angular.module('docsys-phonegap')

  .factory('activityBackendApi', ['configServices', '$resource', function(configServices, $resource) {
    //return $resource('http://localhost:3000/activities'); /** json-server **/
    return $resource('http://192.168.1.46/docsys/public/activities');
  }]);
