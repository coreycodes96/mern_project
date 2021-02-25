import express from 'express';
import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';

//Getting the router
const router = express.Router();

//Getting all the posts
router.get('/', getPosts);

//Create a post
router.post('/', createPost);

//Edit a post
router.patch('/:id', updatePost);

//Delete a post
router.delete('/:id', deletePost);

//Like a post
router.patch('/:id/likePost', likePost);

export default router;