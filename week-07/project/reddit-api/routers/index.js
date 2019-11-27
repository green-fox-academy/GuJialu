const express = require('express');
const app = express();
const PORT = 3000;

const postController = require('../controllers/post');

app.use(express.json());

/* const errHandlerWrapper = async (routerFunc) */
function errHandlerWrapper(routerFunc) {
  return async (req, res, next) => {
    try {
      await routerFunc(req, res);
    } catch (error) {
      next(error);
    }
  }
}

app.get('/posts', errHandlerWrapper(postController.getAll));
app.post('/posts', errHandlerWrapper(postController.add));

/* app.use(function auth(req, res, next) {
  if (req.header('Username')) {
    return next();
  } else {
    res.status(403).send('Not logged in!');
  }
}) */

app.put('/posts/:id/upvote', postController.upvote);
app.put('/posts/:id/downvote', postController.downvote);

app.use(function errorHandler(err, req, res, next) {
  console.log('hhhhhh');
  res.status(500).send('Something broke!');
  next(err);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

