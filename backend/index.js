const express = require('express'); 
const connectToDatabase = require("./database")
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');
const loginRoute=require('./routes/loginRoute');
const getMessageRoute=require('./routes/getmessages');
const getUserRoute=require('./routes/getUserRoute');



const app = express(); 
const PORT = 3002; 

app.use(cors());
  
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.use(bodyParser.json())
app.use('/api/users', userRoutes);
app.use('/api/users', loginRoute);
app.use('/api', getMessageRoute);
app.use('/api/users',getUserRoute);
 
 
 

app.listen(PORT, (error) =>{ 
    if(!error){
        
        console.log(`server is listening on port ${PORT}`)
    }
    else{
        console.log("error starting server",error)
    }
	
	} 
); 
