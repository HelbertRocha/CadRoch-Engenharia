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

  .controller('SideMenuCtrl', ['$scope', '$state',
    function ($scope, $state) {

      $scope.init = function() {

      };

      $scope.showLogin = function() {
        $state.go('login')
      };

      $scope.showSettings = function() {
        $state.go('sidemenu.settings');
      };

      $scope.init();
    }]);
