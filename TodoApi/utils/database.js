const mysql = require('mysql2');
var connection;

//if (!connection) {
connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'test1',
  database: 'test',
});
//}
module.exports = connection;

/*var pool;

module.exports = {
  getPool: function(config) {
    if (pool) return pool;

    pool = mysql.createPool({
      host: config.host,
      user: config.root,
      password: config.password,
      database: config.database,
    });
    return pool;
  },
};*/
