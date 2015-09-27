/**
 * Created by Opstrup on 26/09/15.
 */

angular.module('docsys-phonegap')

  .factory('fileTransferServices', ['configServices', '$cordovaFileTransfer', '$ionicPlatform', function(configServices, $cordovaFileTransfer, $ionicPlatform) {

    var options = {
      fileKey: "picture",
      fileName: "image.jpeg",
      chunkedMode: false,
      mimeType: "image/jpeg"
    };

    return {

      uploadPicture: function(endpoint, picture) {
        console.log("Hello from upload picture func 1");
        console.log(endpoint, picture);
        // as soon as this function is called FileTransfer "should" be defined
        document.addEventListener('deviceready', function () {
          console.log("Hello from upload picture func 2");
          return $cordovaFileTransfer.upload(endpoint, picture, options);
        }, false);
        console.log("Hello from upload picture func 3");
      }
    };

  }]);
