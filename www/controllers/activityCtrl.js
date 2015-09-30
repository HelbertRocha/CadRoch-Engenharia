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
     '$ionicPlatform',
     '$cordovaCamera',
     '$cordovaFileTransfer',
     '$ionicPopup',
     'fileTransferServices',
     'configServices',
     '$state',
      function($scope,
               userServices,
               gpsLocationServices,
               activityBackendApi,
               $ionicPlatform,
               $cordovaCamera,
               $cordovaFileTransfer,
               $ionicPopup,
               fileTransferServices,
               configServices,
               $state) {

    /**
     * This function gets called when the controller get loaded into memory.
     * It sets up all the variables for the controller.
     */
    $scope.init = function() {
      $scope.user = userServices.getUser();
      $scope.date = new Date();
      $scope.picture = "";
    };

    $scope.logout = function() {
      $state.go('home');
    };

    $scope.logActivity = function(activity) {

      gpsLocationServices.getLocation().then(function(position) {
        $ionicPlatform.ready(function () {
          var options = {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 600,
            targetHeight: 600,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation: true
          };

          // @todo unit test getPicture function and add exception handling
          $cordovaCamera.getPicture(options).then(function (imageData) {
            $scope.picture = "data:image/jpeg;base64," + imageData;

            document.addEventListener('deviceready', function () {
              var pictureOptions = {
                fileKey: "picture",
                fileName: $scope.user.id + ".jpeg",
                chunkedMode: false,
                mimeType: "image/jpeg"
              };

              $cordovaFileTransfer.upload(configServices.baseUrl + configServices.pictureEndpoint, $scope.picture, pictureOptions)
                .then(function(result) {
                  var filePath = result.response;

                  var userData = {
                    userID: $scope.user.id,
                    activity: activity,
                    picture_url: filePath,
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                  };

                  activityBackendApi.save(userData);

                  $ionicPopup.alert({
                    title: 'Success',
                    template: '<img src="http://www.hotelandairpromotion.com/img/success.png" style="display: block; margin-left: auto; margin-right: auto; width: 75px; height: 75px"><br/ >Your current status is now: ' + activity
                  });
                }, function(err) {
                  // Error
                });

            }, false);

          });
        });
      });

    };

    $scope.init();
  }]);
