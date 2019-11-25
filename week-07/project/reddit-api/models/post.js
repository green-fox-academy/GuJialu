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
  const queryStr = 'select * from possts';
  return await conn.query(queryStr);
}

async function getById(id) {
  const queryStr = 'select * from posts where id=?';
  return await conn.query(queryStr, [id]);
}

async function add(post) {
  const queryStr = 'insert into posts (author_name, title, url) values (?, ?, ?)';
  return await conn.query(queryStr, [post.username, post.title, post.url]);
}

async function update(id, newPost) {
  const queryStr = 'update posts set title=?, url=? where id=?';
  return await conn.query(queryStr, [newPost.title, newPost.url, id]);
}

async function remove(id) {
  const queryStr = 'delete posts where id=?';
  return await conn.query(queryStr, [id]);
}

async function upvote(username, postId) {
  const queryStr = 'insert into votes (user_name, post_id, upvote) values (?, ?, true)';
  return await conn.query(queryStr, [username, postId]);
}

async function downvote(username, postId) {
  const queryStr = 'insert into votes (user_name, post_id, upvote) values (?, ?, false)';
  return await conn.query(queryStr, [username, postId]);
}

async function hasUpvoted(username, postId) {
  const queryStr = 'select exists(select * from votes where user_name=? and post_id=? and upvote=true);';
  return await conn.query(queryStr, [username, postId]);
}

async function hasDownvoted(username, postId) {
  const queryStr = 'select exists(select * from votes where user_name=? and post_id=? and upvote=false);';
  return await conn.query(queryStr, [username, postId]);
}

module.exports = {
  getall,
  getById,
  add,
  update,
  remove,
  upvote,
  downvote,
  hasUpvoted,
  hasDownvoted
}