class Tweet {
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }
}

const tweets = [];

module.exports = {
  Tweet,
  tweets,
};
