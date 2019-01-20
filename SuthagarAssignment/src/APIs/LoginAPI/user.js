import Database from '../../util/Database';
import createToken from '../../util/createToken';
var bcrypt = require('bcrypt-nodejs');

export default class userInfo {
  constructor() {
    if (!this.Database) {
      this.Database = new Database();
    }
  }
  checkCallback(callback) {
    if (typeof callback !== 'function') {
      throw 'callback must be a function';
    }
    return true;
  }

  createTodo(userinfoq, callback) {
    var user = {
      username: userinfoq.username,

      password: userinfoq.password,
    };
    bcrypt.hash(user.password, null, null, function(err, hash) {
      user.password = hash;
    });
    if (this.checkCallback(callback)) {
      this.Database.startConnection();
      let query = `INSERT INTO usermanagement(username,password) values('${
        user.username
      }','${user.password}')`;

      this.Database.db.query(query, (error, rows) => {
        if (error) {
          throw error;
        }
        callback('Create Data Success');
      });
    }
  }

  getTodos(user, callback) {
    if (this.checkCallback(callback)) {
      this.Database.startConnection();
      let res;
      let connection = this.Database.db;
      if (this.checkCallback(callback)) {
        this.Database.startConnection();
        connection.query(
          'SELECT userid,username,password from user where username = ?',
          [user.username],
          (err, result) => {
            console.log(user.username);
            if (err) {
              res = { type: 'error', code: 403, data: false };
              callback(res);
            } else {
              bcrypt.compare(user.password, result.password, (err, status) => {
                if (status == true) {
                  var token = new createToken({
                    id: result.userid,
                    username: result.username,
                  });
                  res = {
                    type: 'success',
                    code: 200,
                    data: status,
                    token: token,
                  };
                } else {
                  res = { type: 'error', code: 403, data: status };
                }
                callback(res);
              });
            }
          }
        );
      }
    }
  }
}
