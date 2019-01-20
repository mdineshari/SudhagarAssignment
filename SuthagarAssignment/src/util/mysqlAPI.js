var colors = require('colors');
var mysqlCon = require('./mysql-conn');

export default mysqlAPI{
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

const reconnect = function() {
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
      setTimeout(mysqlAPI.reconnect, 2000);
    }
  );
};

}
