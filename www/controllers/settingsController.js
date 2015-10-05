/**
 * Created by Opstrup on 30/09/15.
 */
'use strict';

angular.module('docsys-phonegap')

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('sidemenu.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'templates/settingsView.html',
            controller: 'SettingsCtrl'
          }
        }
      });
  }])

  .controller('SettingsCtrl', ['$scope', '$translate',
    function ($scope, $translate) {

      $scope.init = function () {
        $scope.englishActivated = true;
        $scope.protugueseActivated = false;
      };

      $scope.changeLanguage = function(lang) {
        if(lang == "en_US") {
          $scope.englishActivated = true;
          $scope.protugueseActivated = false;
        } else {
          $scope.protugueseActivated = true;
          $scope.englishActivated = false;
        }

        $translate.use(lang);
      };

      $scope.init();
    }]);
