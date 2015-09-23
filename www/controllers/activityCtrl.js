/**
 * Created by Opstrup on 14/09/15.
 */
'use strict';

angular.module('docsys-phonegap')

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('activity', {
        url: '/activity',
        templateUrl: 'templates/activityView.html',
        controller: 'ActivityCtrl'
      });
  }])

  // @todo add logout btn to activity
  .controller('ActivityCtrl', ['$scope', 'userServices', '$cordovaGeolocation', function($scope, userServices, $cordovaGeolocation) {
    $scope.init = function() {
      $scope.user = userServices.getUser();
      $scope.date = new Date();
    };

    $scope.goToActivity = function(activity) {

      var geolocationOptions = {timeout: 10000, enableHighAccuracy: false};
      $cordovaGeolocation
        .getCurrentPosition(geolocationOptions)
        .then(function (position) {
          console.log("user is", activity, " at");
          console.log("lat", position.coords.latitude);
          console.log("long", position.coords.longitude);
        }, function(err) {
          // error
        });
    };

    $scope.init();
  }]);
