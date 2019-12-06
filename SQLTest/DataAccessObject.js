const sqlite = require('sqlite');
const Promise = require('bluebird');

class AppDataAccessObject {
  constructor(dbFilePath) {
    this.db - new sqlite2.Database(dbFilePath, (err) => {
      if(err) {
        console.log("could not coonnet to db");
      } else {
        console.log("connected to DB");
      }
    })
  }
}

module.exports = AppDataAccessObject;