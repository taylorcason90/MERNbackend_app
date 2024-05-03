const User = require('../models/User');

const getPosts = async (req, res) => {
  try {
    const usersWithPosts = await User.find().populate('posts');
    const posts = usersWithPosts.map(user => user.posts).flat(); // Flatten posts array
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const { title, content, userId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newPost = { title, content };
    user.posts.push(newPost);
    await user.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { userId, postId } = req.params;
  const { title, content } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const postToUpdate = user.posts.id(postId);
    if (!postToUpdate) {
      return res.status(404).json({ message: 'Post not found' });
    }

    postToUpdate.set({ title, content });
    await user.save();

    res.status(200).json(postToUpdate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  const { userId, postId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const postToDelete = user.posts.id(postId);
    if (!postToDelete) {
      return res.status(404).json({ message: 'Post not found' });
    }

    postToDelete.remove();
    await user.save();

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getPosts, createPost, updatePost, deletePost };