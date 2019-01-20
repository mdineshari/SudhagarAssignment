import mysql from 'mysql';

export default class Database {
  constructor() {
    const config = {
      host: 'localhost',
      user: 'root',
      password: 'test1',
      database: 'todoassignment',
    };
    this.db = mysql.createPool(config);
  }

  startConnection() {
    this.db.getConnection((error, connection) => {
      if (error) {
        throw error;
      }
      console.log('Database Connected');
      return connection;
    });
  }
  reconnect() {
    mysqlCon.connect().then(
      function(con) {
        console.log('connected. getting new reference');
        this.db = con;
        this.db.on('error', function(err, result) {
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
