/**
 * Created by Opstrup on 14/09/15.
 */
'use strict';

angular.module('docsys-phonegap')

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/homeView.html',
        controller: 'HomeCtrl'
      });
  }])

  .controller('HomeCtrl', ['$location', '$scope', '$ionicModal', 'authenticationServices', 'userBackendApi', function($location, $scope, $ionicModal, authenticationServices, userBackendApi) {

    $scope.init = function() {
      $scope.errorMessage = "";
      $scope.hideErrorMessage = true;
      $scope.user = {};
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

    $scope.showErrorMessage = function(message) {
      $scope.hideErrorMessage = false;
      $scope.errorMessage = message;
    };

    $scope.logIn = function() {
      if($scope.user.username || $scope.user.password) {
        var userList = userBackendApi.query(function() {
          if(authenticationServices.isUserAuthenticated(userList, $scope.user)) {
            $location.path('/activity');
          }});
        $scope.showErrorMessage("User or password is not correct");
      } else {
        $scope.showErrorMessage("Please fill out username and password");
      }
    };

    $scope.init();
  }]);
