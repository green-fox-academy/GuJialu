const postModel = require('../models/post');

async function getAll(req, res, next) {
  try {
    const result = await postModel.getall();
    console.log({ posts: result });
    res.status(200).send({ posts: result });
  } catch (err) {
    next(err);
  }
}

async function add(req, res, next) {

  const username = req.header('Username') || null;
  const title = req.body.title;
  const url = req.body.url;

  if (!title || !url) {
    res.sendStatus(400);
    return;
  }

  try {
    const result = await postModel.add(username, title, url);
    const response = await postModel.getById(result.insertId);
    res.status(201).send(response);
  } catch (err) {
    next(err);
  }

}

async function vote(req, res, next, isUpvote) {

  const username = req.header('Username');
  const postId = parseInt(req.params.id, 10);

  if (isNaN(postId) || !username) {
    res.sendStatus(400);
    return;
  }

  let vote;
  try {
    vote = await postModel.getVote(username, postId);
  } catch (error) {
    return next(error);
  }
  console.log("vote:" + vote);

  if (vote.length === 0) {
    try {
      await postModel.addVote(username, postId, isUpvote);
      res.status(200).send(await postModel.getById(postId));
      return;
    } catch (error) {
      return next(error);
    }
  } else if (vote[0].upvote === (isUpvote ? 1 : 0)) {
    res.status(409).send('already voted');
    return;
  } else {
    try {
      await postModel.updateVote(username, postId, isUpvote);
      res.status(200).send(await postModel.getById(postId));
    } catch (error) {
      return next(error);
    }
  }

}

async function upvote(req, res, next) {
  vote(req, res, next, true);
}

async function downvote(req, res, next) {
  vote(req, res, next, false);
}

module.exports = {
  getAll,
  add,
  upvote,
  downvote
}