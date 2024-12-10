import express from 'express'
import { createPost } from '../controllers/postController.js'

const router = express.Router()

// Route to create a new post
router.post('/posts', createPost)

export default router
