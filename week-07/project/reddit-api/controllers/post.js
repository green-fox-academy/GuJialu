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

  const post = {
    username: username,
    title: req.body,
    url: req.body.url
  }

  try {
    await postModel.add(post);
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }

}

async function upvote(req, res, next) {

  const username = req.header('Username') || null;
  const id = parseInt(req.param.id, 10);

  if (isNaN(id)) {
    res.sendStatus(400);
    return;
  }

  let hasVoted;
  try {
    hasVoted = await postModel.hasUpvoted(username, id);
  } catch (error) {
    next(error);
    return;
  }

  if (username !== null && hasVoted) {
    res.sendStatus(409);
    return;
  }

  try {
    await postModel.upvote(username, id);
  } catch (error) {
    next(error);
  }

}

async function downvote(req, res, next) {

  const username = req.header('Username') || null;
  const id = parseInt(req.param.id, 10);

  if (isNaN(id)) {
    res.sendStatus(400);
    return;
  }

  let hasVoted;
  try {
    hasVoted = await postModel.hasDownvoted(username, id);
  } catch (error) {
    next(error);
    return;
  }

  if (username !== null && hasVoted) {
    res.sendStatus(409);
    return;
  }

  try {
    await postModel.downvote(username, id);
  } catch (error) {
    next(error);
  }

}

module.exports = {
  getAll,
  add,
  upvote
}