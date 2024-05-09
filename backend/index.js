const express = require('express'); 
const connectToDatabase = require("./database")

const app = express(); 
const PORT = 3001; 

app.listen(PORT, (error) =>{ 
    if(!error){
        connectToDatabase();
        console.log(`server is listening on port ${PORT}`)
    }
    else{
        console.log("error starting server",error)
    }
	
	} 
); 
