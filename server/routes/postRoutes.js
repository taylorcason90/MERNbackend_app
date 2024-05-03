const express = require('express');
const router = express.Router();
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/PostController');

// GET /api/posts
router.get('/', getPosts);

// POST /api/posts
router.post('/', createPost);

// PUT /api/posts/:userId/:postId
router.put('/:userId/:postId', updatePost);

// DELETE /api/posts/:userId/:postId
router.delete('/:userId/:postId', deletePost);

module.exports = router;