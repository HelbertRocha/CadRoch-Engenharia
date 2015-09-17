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
        username: faker.internet.userName(),
        password: faker.internet.password(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        picture: faker.internet.avatar(),
        CPF: 252373492
      }
    }),
    bosta: _.times(100, function(n){
      return {
        id: n,
        username: faker.internet.userName(),
        password: faker.internet.password(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        picture: faker.internet.avatar(),
        CPF: 252373492
      }
    })
  }
}
