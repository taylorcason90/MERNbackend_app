const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
  avatarUrl: {
    type: String,
    default: '',
  },
  // Add other profile fields as needed
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
