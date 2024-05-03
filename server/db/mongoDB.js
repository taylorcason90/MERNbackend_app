const mongoose = require('mongoose');
require('dotenv').config(); //loads the enviroment variables 

const uri = process.env.MONGODB_URI;

async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, {
      // Remove useNewUrlParser and useUnifiedTopology options
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = { connectToMongoDB };
