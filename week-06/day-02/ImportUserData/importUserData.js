const mysql = require('promise-mysql');
const csv = require('csv-parser');
const fs = require('fs');

async function insertData(data, conn) {
  const queryStr =
    `insert into userData
    (id, prefix, first_name, last_name, address, height, bitcoin_address, color_perference)
    values(?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = {
    id: null,
    prefix: null,
    first_name: null,
    last_name: null,
    address: null,
    height: null,
    bitcoin_address: null,
    color_perference: null
  };
  Object.assign(values, data);
  console.log(values);
  if (values.id === null) {
    console.log('inv');
    return;
  }
  try {
    //console.log(values);
    await conn.query(queryStr, Object.values(values));
  } catch (err) {
/*     try {
      await truncateTable(conn);
    } catch (err) {
      console.log(err);
    } */
    console.log(err);
  }
}

async function importUserData() {
  const conn = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'workshop',
    password: 'password',
    database: 'sys'
  });
  const userData = await readData('./users.csv');
  console.log(userData.length);
  for (let data of userData) {
    await insertData(data, conn);
  }
  return;
}
importUserData();



function readData(path) {
  return new Promise((resolve, reject) =>{
    const results = [];
    try{
      fs.createReadStream(path)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results);
      });
    }catch(err){
      console.log(err);
    }
  }) 
}

async function createTable(conn) {
  const queryStr =
    `create table userData(
      id serial,
      prefix varchar(255),
      first_name varchar(255),
      last_name varchar(255),
      address varchar(255),
      height float,
      bitcoin_address varchar(255),
      color_perference varchar(255)
  )`;
  try {
    conn.query(queryStr);
  } catch (err) {
    console.log(err);
  }
}

async function truncateTable(conn) {
  const queryStr = 'truncate table userData';
  try {
    conn.query(queryStr);
  } catch (err) {
    console.log(err);
  }
}

//readData('users.csv');
