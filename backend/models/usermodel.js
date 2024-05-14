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


  static loginUser(userData,callback){
    const { username,password } = userData;
    const sql='select * from users where username=?';
    connectionPool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      }
      connection.query(sql,[username],(error,results)=>{
        connection.release();
        if (error) {
          console.log(error)
        return callback(error, null);
      }
      if(results.length==0){
        return callback(null,null,{message:"user not found"})
      }
      const user=results[0];
      if(user.password!=password){
        return callback(null,null,{message:"wrong password"})
      }
      return callback(null,user,{message:"login successfull"})

      })
    })


  }
  static getAllUsers(callback){
    const sql="select * from users";
    connectionPool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      }
      connection.query(sql,(error,results)=>{
        connection.release();
        if (error) {
          console.log(error)
        return callback(error, null);
      }
      if(results.length==0){
        return callback(null,null,{message:"user not found"})
      }
      
      return callback(null,results)

      })
    })

   

  }
  
}

module.exports = User;
