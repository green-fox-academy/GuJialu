const express = require('express');
const app = express();
const PORT = 3000;

const todoController = require('../controllers/todo');

app.get('/todos', todoController.getAlltodos);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});