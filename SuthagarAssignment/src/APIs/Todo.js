import Database from '../util/Database';

export default class Todo {
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

  getTodo(id, callback) {
    if (this.checkCallback(callback)) {
      this.Database.startConnection();
      let query = `SELECT * FROM todo WHERE userid=${id}`;
      this.Database.db.query(query, (error, rows) => {
        if (error) {
          throw error;
        }
        if (rows.length === 0)
          callback(`Error: ${rows.length} record found for userid:${id}`);
        else callback(rows);
      });
    }
  }

  deleteTodo(id, callback) {
    if (this.checkCallback(callback)) {
      this.Database.startConnection();
      let query = `DELETE FROM todo WHERE id=${id}`;
      this.Database.db.query(query, (error, rows) => {
        if (error) {
          throw error;
        }
        callback('Delete Data Success');
      });
    }
  }

  createTodo(todo, callback) {
    if (this.checkCallback(callback)) {
      this.Database.startConnection();
      let query = `INSERT INTO todo(userid,name) values('${todo.userId}','${
        todo.name
      }')`;

      this.Database.db.query(query, (error, rows) => {
        if (error) {
          callback(error);
        }
        callback(rows);
      });
    }
  }

  doneTodo(id, callback) {
    if (this.checkCallback(callback)) {
      this.Database.startConnection();
      let query = `SELECT * FROM todo WHERE id=${id} LIMIT 1`;
      this.Database.db.query(query, (error, rows) => {
        if (error) {
          throw error;
        }
        let done = rows[0].done;
        let queryUpdate = `UPDATA todo SET done=${!done} WHERE id=${id}`;
        this.Database.db.query(queryUpdate, (error, rows) => {
          if (error) {
            throw error;
          }
          callback('Updated Data Success');
        });
      });
    }
  }
}

// module.exports = new Todo();
