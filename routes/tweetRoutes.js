
const express = require('express');
const tweetController = require('../controllers/tweetController.js');


const router = express.Router();

function erroMsg() {
  return res.status(404).json({ error: 'Tweet not found' });
}

// Create
router.post('/', (req, res) => {
  const { post } = req.body;
  const newTweet = tweetController.createTweet(post);
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
    erroMsg()
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
    erroMsg()
  }
});

// Delete
router.delete('delete/:id', (req, res) => {
  const tweetId = parseInt(req.params.id);
  const deletedTweet = tweetController.deleteTweet(tweetId);
  if (deletedTweet) {
    res.json(deletedTweet);
    console.log(`the tweet id ${deletedTweet} is deleted`)
  } else {
    erroMsg()
  }
});

module.exports = router;
