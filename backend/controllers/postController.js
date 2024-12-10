import asyncHandler from '../middleware/asyncHandler.js'
import Post from '../models/Post.js'

export const createPost = asyncHandler(async (req, res) => {
  const postData = req.body

  // Validate input data if necessary
  if (!postData.title || !postData.description) {
    return res.status(400).json({ message: 'Title and content are required' })
  }

  try {
    const postCreated = await Post.create(postData)
    res
      .status(201)
      .json({ message: 'Post created successfully', post: postCreated })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})
