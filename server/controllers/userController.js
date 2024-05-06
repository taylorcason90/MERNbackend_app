// // userController.js

// const User = require('../models/User');

// // Controller function to get user profile
// const getUserProfile = async (req, res) => {
//   try {
//     const userId = req.user.userId; // Assuming userId is stored in the request after authentication
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Respond with user profile data
//     res.status(200).json({ username: user.username, email: user.email, /* other user data */ });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching user profile', error: error.message });
//   }
// };

// module.exports = { getUserProfile };
