const express = require('express');
const User = require('../models/usermodel');

const router = express.Router();
router.get('/getusers', (req, res) => {
    User.getAllUsers((err, users) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch users' });
      }
      res.json(users);
    });
  });
  module.exports=router;