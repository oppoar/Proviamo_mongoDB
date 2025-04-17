//server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 👉 serve i file statici
app.use('/uploads', express.static('uploads'));

// 👉 routes
const postsRouter = require('./routes/posts');
const imagesRouter = require('./routes/images'); // 👈 aggiungi questa
const immagineRouter = require('./routes/immagine');
app.use('/posts', postsRouter);
app.use('/images', imagesRouter); // 👈 aggiungi questa
app.use('/immagine', immagineRouter);

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
