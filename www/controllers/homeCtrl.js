/**
 * Created by Opstrup on 14/09/15.
 */
'use strict';

angular.module('docsys-phonegap.home', [])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/homeView.html',
        controller: 'HomeCtrl'
      });
  }])

  .controller('HomeCtrl', ['$scope', '$ionicModal', function($scope, $ionicModal) {

    $scope.init = function() {
      $scope.createModalView();
    };

    $scope.createModalView = function() {
      $ionicModal.fromTemplateUrl('../templates/createNewUserView.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.createNewUserView = modal;
      });
    };

    $scope.showCreateNewUserView = function() {
      $scope.createNewUserView.show();
    };

    $scope.hideCreateNewUserView = function() {
      $scope.createNewUserView.hide();
    };

    $scope.init();
  }]);
