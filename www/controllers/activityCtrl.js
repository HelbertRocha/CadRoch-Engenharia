/**
 * Created by Opstrup on 14/09/15.
 */
'use strict';

angular.module('docsys-phonegap')

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('sidemenu.activity', {
        url: '/activity',
        views: {
          'menuContent': {
            templateUrl: 'templates/activityView.html',
            controller: 'ActivityCtrl'
          }
        }
      });
  }])

  .controller('ActivityCtrl', ['$scope',
     'userServices',
     'gpsLocationServices',
     'activityBackendApi',
     '$cordovaFileTransfer',
     '$ionicPopup',
     'fileTransferServices',
     'configServices',
     '$state',
     'cameraServices',
      function($scope,
               userServices,
               gpsLocationServices,
               activityBackendApi,
               $cordovaFileTransfer,
               $ionicPopup,
               fileTransferServices,
               configServices,
               $state,
               cameraServices) {

    /**
     * This function gets called when the controller get loaded into memory.
     * It sets up all the variables for the controller.
     */
    $scope.init = function() {
      $scope.user = userServices.getUser();
      $scope.date = new Date();
      $scope.picture = "";
    };

    function showSuccessPopup(activity) {
      $ionicPopup.alert({
        title: 'Success',
        template: '<img src="http://www.hotelandairpromotion.com/img/success.png" style="display: block; margin-left: auto; margin-right: auto; width: 75px; height: 75px"><br/ >Your current status is now: ' + activity
      });
    };

    $scope.logout = function() {
      $state.go('home');
    };

    $scope.logActivity = function(activity) {
      gpsLocationServices.getLocation().then(function(position) {

        // @todo unit test getPicture function and add exception handling
        cameraServices.takePicture().then(function (imageData) {
          $scope.picture = "data:image/jpeg;base64," + imageData;

          fileTransferServices.uploadPicture(configServices.pictureEndpoint, $scope.picture, $scope.user.id).then(function(result) {
              var filePath = result.response;

              var userData = {
                userID: $scope.user.id,
                activity: activity,
                picture_url: filePath,
                lat: position.coords.latitude,
                long: position.coords.longitude
              };

              activityBackendApi.save(userData);
              showSuccessPopup(activity);
          }, function(err) {
            // Error
          });
        });
      });
    };

    $scope.init();
  }]);
