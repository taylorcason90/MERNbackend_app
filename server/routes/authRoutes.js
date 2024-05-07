const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
// const { getUserProfile } = require('../controllers/userController');

// Register a new user

router.post('/register', register);

// Login an existing user
router.post('/login', login);

// router.post('/userprofile', getUserProfile)


module.exports = router;
