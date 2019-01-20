'use strict';
var colors = require('colors');
var mysql = require('mysql');
var q = require('q');
var MySQLConnection = {};

MySQLConnection.connect = function() {
  var d = q.defer();
  const config = {
    host: 'localhost',
    user: 'root',
    password: 'test1',
    database: 'todoassignment',
  };
  MySQLConnection.connection = mysql.createConnection(config);

  MySQLConnection.connection.connect(function(err) {
    if (err) {
      console.log(
        'Not connected '.red,
        err.toString().red,
        ' RETRYING...'.blue
      );
      d.reject();
    } else {
      console.log('Connected to Mysql. Exporting..'.blue);
      d.resolve(MySQLConnection.connection);
    }
  });
  return d.promise;
};

module.exports = MySQLConnection;
