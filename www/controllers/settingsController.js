/**
 * Created by Opstrup on 30/09/15.
 */
'use strict';

angular.module('docsys-phonegap')

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('sidemenu.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'templates/settingsView.html',
            controller: 'SettingsCtrl'
          }
        }
      });
  }])

  .controller('SettingsCtrl', ['$scope',
    function ($scope) {

      $scope.init = function () {

      };

      $scope.init();
    }]);
