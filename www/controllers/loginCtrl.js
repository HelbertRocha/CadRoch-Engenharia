/**
 * Created by Opstrup on 14/09/15.
 */
'use strict';

angular.module('docsys-phonegap')

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('sidemenu.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/loginView.html',
            controller: 'LoginCtrl'
          }
        }
      });
  }])

  .controller('LoginCtrl', ['$scope',
    '$ionicModal',
    'authenticationServices',
    'userBackendApi',
    'fileTransferServices',
    '$state',
    '$cordovaCamera',
    '$ionicPlatform',
    '$ionicSideMenuDelegate',
    'loginBackendApi',
    'userServices',
    function ($scope,
              $ionicModal,
              authenticationServices,
              userBackendApi,
              fileTransferServices,
              $state,
              $cordovaCamera,
              $ionicPlatform,
              $ionicSideMenuDelegate,
              loginBackendApi,
              userServices) {

      /**
       * This function gets called when the controller get loaded into memory.
       * It sets up all the variables for the controller and creates the modal view,
       * which is used for creating new users.
       */
      $scope.init = function () {
        $scope.userIsAuthorised = false;
        $scope.userList = {};
        $scope.user = {};
        $scope.newuser = {};
        $scope.newuser.picture = "http://www.wallstreetotc.com/wp-content/uploads/2014/10/facebook-anonymous-app.jpg";
        $scope.hideSuccessMessage = true;
        $scope.successMessage = "New user created";
        $scope.profilePhotoTaken = false;
        initErrorMessages();
        createModalView();
      };

      /**
       * This function sets up the error messages.
       */
      function initErrorMessages() {
        $scope.hideErrorMessage = true;
        $scope.errorMessage = "";
        $scope.modalHideErrorMessage = true;
        $scope.modalErrorMessage = "";
      };

      /**
       * This function creates the modal view for the create new user form.
       */
      function createModalView() {
        $ionicModal.fromTemplateUrl('templates/createNewUserView.html', {
          scope: $scope
        }).then(function (modal) {
          $scope.createNewUserView = modal;
        });
      };

      $scope.showCreateNewUserView = function () {
        $scope.createNewUserView.show();

        // Clearing possible error messages on login view
        $scope.showErrorMessage("", false);
        $scope.hideErrorMessage = true;
      };

      $scope.hideCreateNewUserView = function () {
        $scope.createNewUserView.hide();

        // @todo should clear all text fields on exit
        // Clearing possible error messages on login view
        $scope.showErrorMessage("", true);
        $scope.modalHideErrorMessage = true;
      };

      $scope.showErrorMessage = function (message, modalError) {
        if (modalError) {
          $scope.modalHideErrorMessage = false;
          $scope.modalErrorMessage = message;
        } else {
          $scope.hideErrorMessage = false;
          $scope.errorMessage = message;
        }
      };

      /**
       * This function first checks if the user has filled out the username and password fields
       * after get make at GET request to the userBackendApi. On success GET, it then uses the
       * authenticationServices to check if the given user is authenticated.
       * If the check passes it redirects the user to the activity screen else it shows the
       * "username or password is not correct".
       * @todo make a error msg for unsuccessful GET request.
       */
      $scope.logIn = function () {
        if ($scope.user.username && $scope.user.password) {
          //userBackendApi.query().$promise.then(function(userList) {
          //  $scope.userList = userList;
          /*  if (authenticationServices.isUserAuthenticated($scope.user)) {
              $state.go('sidemenu.activity');
              // @todo clear error msg with successful login
            } else {
              $scope.showErrorMessage("Username or password is not correct", false);
            }
          //})*/

          loginBackendApi.save($scope.user).$promise.then(function(responde) {

            if(!responde.error) {
              userServices.setUser(responde);
              $state.go('sidemenu.activity');
            } else {
              $scope.showErrorMessage(responde.message, false);
            }

          });

        } else {
          $scope.showErrorMessage("Please fill out username and password", false);
        }
      };

      /**
       * This function creates a new user and postes all user information to the server
       * First it checks if the user has taken a profile picture and if the user information is valid.
       * It passes it POSTs all the information to the server and unloads the profile picture.
       */
      $scope.createNewUser = function () {
          // @todo check if user has taken a profile picture and upload picture here!
        if (authenticationServices.authenticateNewUser($scope.newuser)) {
            userBackendApi.save($scope.newuser);
            $scope.hideCreateNewUserView();
            $scope.hideSuccessMessage = false;
          // Call save on userBackendApi and close modal view

          // @todo add error handling here if picture can't be uploaded
          fileTransferServices.uploadPicture("http://192.168.1.46/docsys/public/profilePhotos", $scope.newuser.picture);

        } else {
          $scope.showErrorMessage('Please fill out all fields', true);
        }
      };

      /**
       * This function takes a profile picture for the user
       */
      $scope.takeProfilePicture = function () {
        // check if the device is ready for taking photos

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

          // @todo unit test getPicture function
          $cordovaCamera.getPicture(options).then(function (imageData) {
            $scope.newuser.picture = "data:image/jpeg;base64," + imageData;
            $scope.profilePhotoTaken = true;
          }, function (err) {
            console.log(err);
          });

        });
      };

      $scope.toggleSideMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };

      // With the new view caching in Ionic, Controllers are only called
      // when they are recreated or on app start, instead of every page change.
      // To listen for when this page is active (for example, to refresh data),
      // listen for the $ionicView.enter event:
      //$scope.$on('$ionicView.enter', function(e) {
      //});

      $scope.init();
    }]);
