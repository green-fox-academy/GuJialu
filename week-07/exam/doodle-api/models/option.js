const mysql = require('promise-mysql');

let conn;
mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'workshop',
  password: 'password',
  database: 'doodle'
}).then((val) => conn = val);

async function getall() {
  const queryStr = 'select * from options';
  return await conn.query(queryStr);
}

async function addVote(optionId) {
  const queryStr = 'update options set votes=votes+1 where id=?';
  return await conn.query(queryStr, [optionId]);
}

module.exports = {
  getall,
  addVote
}