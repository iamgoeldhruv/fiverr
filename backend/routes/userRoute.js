const express = require('express');
const User = require('../models/usermodel');

const router = express.Router();

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log(username,email,password)

  // Check if required fields are present and not empty
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create user object with validated data
  const userData = { username, email, password };

  // Call createUser method in User model
  User.createUser(userData, (error, results) => {
    if (error) {
      console.error('Failed to create user:', error);
      return res.status(500).json({ error: 'Failed to create user' });
    }
    return res.status(200).json({ message: 'User created successfully', data: results });
  });
});

module.exports = router;
