const express = require('express');
const tweetRoutes = require('./routes/tweetRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;


// app.use('/users', userRoutes);
app.use(express.json());
app.use('/auth', authRoutes);

// Use tweet routes
app.use('/tweets', tweetRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
