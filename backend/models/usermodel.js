const connectionPool = require("../database");


class User {
  static createUser(userData, callback) {
    const { username, email, password } = userData;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connectionPool.getConnection((err, connection) => {
      if (err) {
        console.log(err)
        return callback(err, null);
      }
      connection.query(sql, [username, email, password], (error, results) => {
        connection.release();
        if (error) {
            console.log(error)
          return callback(error, null);
        }
        return callback(null, results);
      });
    });
  }
}

module.exports = User;
