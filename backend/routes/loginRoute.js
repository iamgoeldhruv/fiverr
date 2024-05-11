const express = require('express');
const User = require('../models/usermodel');

const router = express.Router();

router.post('/login',(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({error:"username and password are required"})
    }
    const userData = { username, password };
    User.loginUser(userData,(err,user,message)=>{
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal server error' });
          }
          if (!user) {
            return res.status(401).json({ error: message.message });
          }
          return res.status(200).json({message:"login successfull"})

    })

    
})
module.exports=router;