const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const jwtSecret =  process.env.JWT_SECRET;

// Function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, jwtSecret, { expiresIn: '1h' });
};

// Handle user registration
const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user document
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Create a user profile for the new user
    const userProfile = new UserProfile({
      userId: newUser._id,
      fullName: username, // You can set other profile fields here
    });
    await userProfile.save();

    const token = generateToken(newUser._id);
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  
  }
};

// Handle user login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);
    res.status(200).json({ token, userId: user._id }); // Send back token and userId
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

module.exports = { register, login };
