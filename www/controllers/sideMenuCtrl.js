/**
 * Created by Opstrup on 30/09/15.
 */
'use strict';

angular.module('docsys-phonegap')

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('sidemenu', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/sideMenuView.html',
        controller: 'SideMenuCtrl'
      });
  }])

  .controller('SideMenuCtrl', ['$scope',
    function ($scope) {

      $scope.init = function () {

      };

      $scope.init();
    }]);
