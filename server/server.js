const express = require('express');
const cors = require('cors');
const { connectToMongoDB } = require('./db/mongoDB');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');
const authMiddleware = require('./middleware/authMiddleware'); // Import authMiddleware
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

connectToMongoDB()
  .then(() => {
    // Proxy middleware
    app.use('/api/auth', authRoutes);
    app.use('/api/posts', postRoutes);
    app.use('/api/profile', profileRoutes); // Use correct path for profileRoutes

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
