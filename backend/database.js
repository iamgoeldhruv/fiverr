const mysql = require("mysql");

// Create and export the connection pool directly
const connectionPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "dhruv12345",
  database: "chatapp",
});

connectionPool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("DB connected successful: " + connection.threadId);
});

module.exports = connectionPool;
