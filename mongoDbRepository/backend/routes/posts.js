//posts.js

const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const body = req.body.body;

  const newPost = new Post({ title, body });

  newPost.save()
    .then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;