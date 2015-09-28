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
  .controller('ActivityCtrl', ['$scope',
                               'userServices',
                               'gpsLocationServices',
                               'activityBackendApi',
                               '$ionicPlatform',
                               '$cordovaCamera',
                               '$cordovaFileTransfer',
                               '$ionicPopup',
                               'fileTransferServices',
                                function($scope,
                                         userServices,
                                         gpsLocationServices,
                                         activityBackendApi,
                                         $ionicPlatform,
                                         $cordovaCamera,
                                         $cordovaFileTransfer,
                                         $ionicPopup,
                                         fileTransferServices) {
    $scope.init = function() {
      $scope.user = userServices.getUser();
      $scope.date = new Date();
      $scope.picture = "";
    };

    $scope.logActivity = function(activity) {

      gpsLocationServices.getLocation().then(function(position) {
      // @todo take picture of user here, upload photo, create JSON obj with GPS location, activity and user info and post to activity endpoint
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
            /*fileTransferServices.uploadPicture("http://192.168.1.46/docsys/public/pictures", $scope.picture, pictureOptions).then(function(result) {
              console.log(result);
            });*/

            document.addEventListener('deviceready', function () {
              var pictureOptions = {
                fileKey: "picture",
                fileName: $scope.user.id + ".jpeg",
                chunkedMode: false,
                mimeType: "image/jpeg"
              };

              $cordovaFileTransfer.upload("http://192.168.1.46/docsys/public/pictures", $scope.picture, pictureOptions)
                .then(function(result) {
                  var filePath = result.response;

                  var testUserData = {
                    userID: $scope.user.id,
                    activity: activity,
                    picture_url: filePath,
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                  };

                  activityBackendApi.save(testUserData);

                }, function(err) {
                  // Error
                }, function (progress) {
                  // constant progress updates
                });

            }, false);

          });




        });

        // @todo change the location of the popup
        var alertPopup = $ionicPopup.alert({
          title: 'Success',
          template: '<img src="http://www.hotelandairpromotion.com/img/success.png" style="display: block; margin-left: auto; margin-right: auto; width: 75px; height: 75px"><br/ >Your current status is now: ' + activity
        });
      });

    };

    $scope.init();
  }]);
