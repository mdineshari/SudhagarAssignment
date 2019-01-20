import mysql from 'mysql';
import mysqlapi from './mysql-conn';
export default class Database {
  constructor() {
    //this.db = mysqlapi;
  }

  startConnection() {
    mysqlCon.connect().then(function(con) {
      console.log('connected!');
      let mysql = con;
      mysql.on('error', function(err, result) {
        console.log('error occurred. Reconneting...'.purple);
        reconnect();
      });
      mysql.query('SELECT 1 + 1 AS solution', function(err, results) {
        if (err) console.log('err', err);
        console.log('Works bro ', results);
      });
    });
  }
  reconnect() {
    mysqlCon.connect().then(
      function(con) {
        console.log('connected. getting new reference');
        let mysql = con;
        mysql.on('error', function(err, result) {
          reconnect();
        });
      },
      function(error) {
        console.log('try again');
        setTimeout(reconnect(), 2000);
      }
    );
  }

  stopConnection() {
    this.db.end(error => {
      if (error) {
        throw error;
      }
      console.log('Database Closed');
    });
  }
}
// module.exports = new Database();
