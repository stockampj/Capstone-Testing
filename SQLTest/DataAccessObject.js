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
    run(sql, params = []) {
      return new Promise((resolve, reject) =>
        this.db.run(sql, params, function (err) {
          if (err) {
            console.log("error running sql" + sql)
            console.log (err)
            reject(err)
          } else {
            resolve({ id: this.lastId})
          }
        })
      )};
  }
}

export default AppDataAccessObject;