import Database from '../util/Database';
var jsonwebtoken = require('jsonwebtoken');
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
          callback({ type: 'error', code: 403, data: false });
        }
        callback('Create Data Success');
      });
    }
  }

  getUser(user, callback) {
    if (this.checkCallback(callback)) {
      this.Database.startConnection();
      let res;
      this.Database.db.query(
        'SELECT userid,username,password from usermanagement where username = ?',
        [user.username],
        (err, rows) => {
          if (err) {
            res = { type: 'error', code: 403, data: false };
            callback(res);
          } else {
            let result = [];
            rows.map(item => {
              result.push({ ...item });
            });
            //bcrypt.compare(user.password, result[0].password, (err, status) => {
            console.log(err);
            if (user.password === result[0].password) {
              var token = jsonwebtoken.sign(
                {
                  id: result[0].userid,
                  username: result[0].username,
                },
                '123456789'
              );
              res = {
                type: 'success',
                code: 200,
                data: result[0],
                token: token,
              };
            } else {
              res = { type: 'error', code: 403, data: 'Invalid User' };
            }
            callback(res);
          }
        }
      );
    }
  }
}
