const express = require('express');
const tweetRoutes = require('./routes/tweetRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;


app.use('/users', userRoutes);
app.use('/auth', authRoutes);



app.use(express.json());

// Use tweet routes
app.use('/tweets', tweetRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
