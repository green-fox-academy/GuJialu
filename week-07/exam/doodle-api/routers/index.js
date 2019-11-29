const express = require('express');
const app = express();
const PORT = 4000;

const optionController = require('../controllers/option');

app.use(express.json());

function errHandleWrapper(routerFunc) {
  return async (req, res, next) => {
    try {
      await routerFunc(req, res);
    } catch (error) {
      next(error);
    }
  }
}

app.get('/api/poll', errHandleWrapper(optionController.getAll));
app.post('/api/vote/:optionId', errHandleWrapper(optionController.vote));

app.use(function errorHandler(err, req, res, next) {
  console.log('hhhhhh');
  res.status(500).send('Something broke!');
  next(err);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

