const express = require('express');
const router = express.Router();
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/PostController');
const authMiddleware =require('../middleware/authMiddleware');

// GET /api/posts
router.get('/', authMiddleware, getPosts);

// POST /api/posts
router.post('/', authMiddleware, createPost);

// PUT /api/posts/:userId/:postId
router.put('/:userId/:postId', authMiddleware, updatePost);

// DELETE /api/posts/:userId/:postId
router.delete('/:userId/:postId', authMiddleware, deletePost);

module.exports = router;