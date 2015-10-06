/**
 * Created by Opstrup on 26/09/15.
 */

angular.module('docsys-phonegap')

  .factory('fileTransferServices', ['$cordovaFileTransfer', 'configServices', function($cordovaFileTransfer, configServices) {

    var _fileName = "image";
    var _options = {
      fileKey: "picture",
      fileName: _fileName + ".jpeg",
      chunkedMode: false,
      mimeType: "image/jpeg"
    };

    return {

      uploadPicture: function(endpoint, picture, fileName) {

        if(fileName)
          _fileName = fileName;

        return $cordovaFileTransfer.upload(configServices.baseUrl +  endpoint, picture, _options);
      }
    };

  }]);
