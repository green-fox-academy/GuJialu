const mysql = require('promise-mysql');

let conn;
mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'workshop',
  password: 'password',
  database: 'sys'
}).then((val) => conn = val);

async function getall() {
  const queryStr = 'select * from todos';
  return await conn.query(queryStr);
}

async function add(todo) {
  const queryStr = 'insert into todos (title, done) values (?, ?)';
  return await conn.query(queryStr, [todo.title, true]);
}

module.exports = {
  getall,
  add
}