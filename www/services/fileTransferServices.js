/**
 * Created by Opstrup on 26/09/15.
 */

angular.module('docsys-phonegap')

  .factory('fileTransferServices', ['configServices', '$cordovaFileTransfer', function(configServices, $cordovaFileTransfer) {

    var _options = {
      fileKey: "picture",
      fileName: "image.jpeg",
      chunkedMode: false,
      mimeType: "image/jpeg"
    };

    return {

      uploadPicture: function(endpoint, picture, specificOptions) {

        if(specificOptions)
          options = specificOptions;
        else
          options = _options;

        // as soon as this function is called FileTransfer "should" be defined
        document.addEventListener('deviceready', function () {
          return $cordovaFileTransfer.upload(endpoint, picture, options);
        }, false);
      }
    };

  }]);
