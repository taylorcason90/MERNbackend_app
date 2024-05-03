const express = require('express');
const cors = require('cors');
const { connectToMongoDB } = require('./db/mongoDB');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectToMongoDB()
  .then(() => {
    app.use('/api/auth', authRoutes);
    app.use('/api/posts', postRoutes);

    //starts the server 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
