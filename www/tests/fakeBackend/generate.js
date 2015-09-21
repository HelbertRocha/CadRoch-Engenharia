/**
 * Created by Opstrup on 15/09/15.
 */

module.exports = function(){
  var faker = require("faker");
  var _ = require("lodash");
  return {
    user: _.times(100, function(n){
      return {
        id: n,
        username: "fakeUser" + n.toString(),
        password: "fakePassword",
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        picture: faker.internet.avatar(),
      }
    })
  }
}
