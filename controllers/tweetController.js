const { Tweet, tweets } = require('../models/tweetModel.js');


// Create
const createTweet = (content) => {
  const newTweet = new Tweet(tweets.length + 1, content);
  tweets.push(newTweet);
  return tweets;
};



// Read all
const getAllTweets = () => {
  return tweets;
};

// Read one
const getTweetById = (id) => {
  return tweets.find((tweet) => tweet.id === id);
};


// Update
const updateTweet = (id, content) => {
  const tweet = getTweetById(id);
  if (tweet) {
    tweet.content = content;
  }
  return tweet;
};

// Delete
const deleteTweet = (id) => {
  const tweetIndex = tweets.findIndex((tweet) => tweet.id === id);
  if (tweetIndex !== -1) {
    return tweets.splice(tweetIndex, 1)[0];
  }
  return null;
};

module.exports = {
  createTweet,
  getAllTweets,
  getTweetById,
  updateTweet,
  deleteTweet,
};
