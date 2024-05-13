const connectionPool = require("../database")

class messages{
   static getAllMessages(senderId,receiverId){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM messages 
                   WHERE (sender_id = ? AND receiver_id = ?) 
                   OR (sender_id = ? AND receiver_id = ?) 
                   ORDER BY sent_at DESC`;
        connectionPool.getConnection((err,connection)=>{
            if(err){
                console.log(err);
                return reject(err);
            }
            connection.query(sql,[senderId,receiverId,receiverId,senderId],(error,results)=>{
                connection.release()
                if(error){
                    console.log(error);
                    return reject(error);
                }
                return resolve(results);

            })
        })

        
    })

   }


}
module.exports=messages;