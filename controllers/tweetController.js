const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { Tweet, tweets } = require('../models/tweetModel.js');


// Create

const createTweet = async (req, res) => {
  const { userId, id, title, body, url, thumbnailUrl, like, repost } = req.body;
  try {
    const newPost = await prisma.post.create({
      data: {userId, id, title, body, url, thumbnailUrl, like, repost },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
};



// Read all

const getAllTweets = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error getting posts' });
  }
};




// Read one
const getTweetById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
    });
    if (!post) {
      return res.status(404).json({ error: 'post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error getting post' });
  }
};


// Update

const updateTweet = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedPost = await prisma.post.update({
      where: { id: parseInt(id) },
      data: { name, email },
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
};



// Delete

const deleteTweet = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.post.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
};



module.exports = {
  createTweet,
  getAllTweets,
  getTweetById,
  updateTweet,
  deleteTweet,
};
