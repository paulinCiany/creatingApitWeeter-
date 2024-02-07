
const express = require('express');
const tweetController = require('../controllers/tweetController');

const router = express.Router();

// Create
router.post('/', (req, res) => {
  const { content } = req.body;
  const newTweet = tweetController.createTweet(content);
  res.json(newTweet);
});

// Read all
router.get('/', (req, res) => {
  const allTweets = tweetController.getAllTweets();
  res.json(allTweets);
});

// Read one
router.get('/:id', (req, res) => {
  const tweetId = parseInt(req.params.id);
  const tweet = tweetController.getTweetById(tweetId);
  if (tweet) {
    res.json(tweet);
  } else {
    res.status(404).json({ error: 'Tweet not found' });
  }
});

// Update
router.put('/:id', (req, res) => {
  const tweetId = parseInt(req.params.id);
  const { content } = req.body;
  const updatedTweet = tweetController.updateTweet(tweetId, content);
  if (updatedTweet) {
    res.json(updatedTweet);
  } else {
    res.status(404).json({ error: 'Tweet not found' });
  }
});

// Delete
router.delete('/:id', (req, res) => {
  const tweetId = parseInt(req.params.id);
  const deletedTweet = tweetController.deleteTweet(tweetId);
  if (deletedTweet) {
    res.json(deletedTweet);
  } else {
    res.status(404).json({ error: 'Tweet not found' });
  }
});

module.exports = router;
