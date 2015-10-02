'use strict';

angular.module('docsys-phonegap', [
  'ionic',
  'ngCordova',
  'ngResource',
  'pascalprecht.translate'
  ])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(['$urlRouterProvider', '$translateProvider', function($urlRouterProvider, $translateProvider) {
    $urlRouterProvider.otherwise('/app/login');

    /*Translation support*/
    $translateProvider.useStaticFilesLoader({
      prefix: 'translations/local-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage("en_US");

  }])

  .run(['$ionicPlatform', '$translate', '$cordovaGlobalization', function($ionicPlatform, $translate, $cordovaGlobalization) {
    $ionicPlatform.ready(function() {
      /*Checking for preferredLanguage on device*/
      document.addEventListener("deviceready", function () {
       $cordovaGlobalization.getPreferredLanguage().then(
       function(result) {
       if(result.value == "pt-BR") {
         $translate.use("pt_BR");
       } else {
         console.log(result.value);
         $translate.use("en_US");
       }
       });
       }, false);
    });
  }]);


