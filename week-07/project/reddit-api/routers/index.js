const express = require('express');
const app = express();
const PORT = 3000;

const postController = require('../controllers/post');

app.use(express.json());

app.get('/posts', postController.getAll);
app.post('/posts', postController.add);
app.put('/posts/:id/upvote', postController.upvote);

app.use(function errorHandler(err, req, res, next) {
  console.log('hhhhhh');
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

