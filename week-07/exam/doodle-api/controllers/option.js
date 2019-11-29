const optionModel = require('../models/option');

const questionStr = 'Where should we go for dinner?';

async function getAll(req, res) {
  const result = await optionModel.getall();
  res.status(200).send({
    question: questionStr,
    options: result
  });
}

async function vote(req, res) {

  const optionId = parseInt(req.params.optionId, 10);

  if (isNaN(optionId)) {
    
    res.sendStatus(400);
    return;
  }

  await optionModel.addVote(optionId)
  const result = await optionModel.getall();
  res.status(200).send({
    question: questionStr,
    options: result
  });
}

module.exports = {
  getAll,
  vote
}