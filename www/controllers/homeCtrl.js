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
      $scope.userIsAuthorised = false;
      $scope.userList = {};
      $scope.user = {};
      $scope.newuser = {};
      initErrorMessages();
      createModalView();
    };

    function initErrorMessages() {
      $scope.hideErrorMessage = true;
      $scope.errorMessage = "";
      $scope.modalHideErrorMessage = true;
      $scope.modalErrorMessage = "";
    };

    function createModalView() {
      $ionicModal.fromTemplateUrl('../templates/createNewUserView.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.createNewUserView = modal;
      });
    };

    $scope.showCreateNewUserView = function() {
      $scope.createNewUserView.show();

      // Clearing possible error messages on home view
      $scope.showErrorMessage("", false);
      $scope.hideErrorMessage = true;
    };

    $scope.hideCreateNewUserView = function() {
      $scope.createNewUserView.hide();

      // Clearing possible error messages on home view
      $scope.showErrorMessage("", true);
      $scope.modalHideErrorMessage= true;
    };

    $scope.showErrorMessage = function(message, modalError) {
      if(modalError) {
        $scope.modalHideErrorMessage = false;
        $scope.modalErrorMessage = message;
      } else {
        $scope.hideErrorMessage = false;
        $scope.errorMessage = message;
      }
    };

    $scope.logIn = function() {
      if($scope.user.username || $scope.user.password) {
        userBackendApi.query().$promise.then(function(userList) {
          $scope.userList = userList;
          if(authenticationServices.isUserAuthenticated($scope.userList, $scope.user)) {
            $scope.userIsAuthorised = true;
            $location.path('/activity');
          }
          else{
            $scope.showErrorMessage("Username or password is not correct", false);
          }
        })
      } else {
        $scope.showErrorMessage("Please fill out username and password", false);
      }
    };

    $scope.createNewUser = function() {
      if($scope.newuser.username || $scope.newuser.password || $scope.newuser.name || $scope.newuser.surename)
      {
        // Call save on userBackendApi and close modal view
        userBackendApi.save('plapla');
      } else {
        $scope.showErrorMessage('Please fill all fields', true);
      }
    };

    $scope.init();
  }]);
