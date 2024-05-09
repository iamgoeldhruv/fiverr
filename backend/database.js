const mysql = require("mysql")


function connectToDatabase(){


var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"dhruv12345",
    database:"chatapp",



})
connection.connect(function (err) {
   if(err){
       console.log("error occurred while connecting",err.message);
   }
   else{
       console.log("connection created with Mysql successfully");
   }
});
}
module.exports=connectToDatabase