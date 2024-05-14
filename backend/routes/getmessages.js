const express = require('express');
const Messages=require('../models/messagemodel');
const router = express.Router();

router.get('/getmessages/:senderId/:receiverId',async(req,res)=>{
    const {senderId,receiverId}=req.params;
    try {
        const messages=Messages.getAllMessages(senderId,receiverId);
        res.json(messages)
    } catch (error) {
        console.log(error);
        res.status(401).json({"error":"error getting messages"})
        
    }
})
module.exports=router;