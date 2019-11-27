const mysql = require('promise-mysql');

let conn;
mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'workshop',
  password: 'password',
  database: 'reddit'
}).then((val) => conn = val);

async function getall() {
  const queryStr = 'select * from posts';
  return await conn.query(queryStr);
}

async function getById(id) {
  const queryStr = 'select * from posts where id=?';
  return await conn.query(queryStr, [id]);
}

async function add(username, title, url) {
  const queryStr = 'insert into posts (author_name, title, url) values (?, ?, ?)';
  return await conn.query(queryStr, [username, title, url]);
}

async function update(id, newTitle, newUrl) {
  const queryStr = 'update posts set title=?, url=? where id=?';
  return await conn.query(queryStr, [newTitle, newUrl, id]);
}

async function remove(id) {
  const queryStr = 'delete posts where id=?';
  return await conn.query(queryStr, [id]);
}

async function addVote(username, postId, isUpvote) {
  const queryStr = 'insert into votes (user_name, post_id, upvote) values (?, ?, ?)';
  return await conn.query(queryStr, [username, postId, isUpvote]);
}

async function updateVote(username, postId, isUpvote) {
  const queryStr = 'update votes set upvote=? where user_name=? and post_id=?';
  return await conn.query(queryStr, [isUpvote, username, postId]);
}

async function removeVote(username, postId) {
  const queryStr = 'delete from votes where user_name=? and post_id=?';
  return await conn.query(queryStr, [username, postId]);
}

async function getVote(username, postId) {
  const queryStr = 'select * from votes where user_name=? and post_id=?';
  return await conn.query(queryStr, [username, postId]);
}

module.exports = {
  getall,
  getById,
  add,
  update,
  remove,
  addVote,
  updateVote,
  removeVote,
  getVote
}