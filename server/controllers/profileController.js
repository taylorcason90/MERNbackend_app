// Fetch user profile by userId
exports.getUserProfile = async (req, res) => {
  try {
    const user = req.user; // Access the authenticated user from req.user
    res.status(200).json({
      username: user.username,
      email: user.email,
      // Add other profile data as needed
    });

  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
