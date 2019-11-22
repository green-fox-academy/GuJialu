const todo = require('../models/todo');

async function getAlltodos(req, res) {
  try {
    const result = await todo.getall();
    console.log(result);
    res.send(result);
  } catch(err){
    console.log(err);
    res.status(404);
    res.send();
  }
}

module.exports = {
  getAlltodos
}