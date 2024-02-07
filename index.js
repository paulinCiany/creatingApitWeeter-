const express = require('express');
const bodyParser = require('body-parser');
const tweetRoutes = require('./routes/tweetRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Use tweet routes
app.use('/tweets', tweetRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
