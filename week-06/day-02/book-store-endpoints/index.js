const express = require('express');
const mysql = require('promise-mysql');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));
app.use(express.json());

let conn;
mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'workshop',
  password: 'password',
  database: 'sys'
}).then((val)=>conn=val);

app.get('/books', async (req, res) => {
  const filters = req.query;
  console.log(filters);
  let queryStr = `select book_name, aut_name, cate_descrip, pub_name, book_price
    from book_mast join author on book_mast.aut_id=author.aut_id
      join category on book_mast.cate_id=category.cate_id
      join publisher on book_mast.pub_id=publisher.pub_id`;

  let conditionStrs = [];
  let conditions = [];
  if(filters.category){
    conditionStrs.push('cate_descrip=?');
    conditions.push(filters.category);
  }
  if(filters.publisher){
    conditionStrs.push('pub_name=?');
    conditions.push(filters.publisher);
  }
  if(filters.plt){
    conditionStrs.push('book_price<=?');
    conditions.push(filters.plt);
  }
  if(filters.pgt){
    conditionStrs.push('book_price>?');
    conditions.push(filters.pgt);
  }
  if(conditions.length>0){
    queryStr += ' where ' + conditionStrs.join(' and ');
  }

  try{
    const result = await conn.query(queryStr, conditions);
    res.status(200);
    res.render('books', {books: result});
  }catch(err){
    res.sendStatus(500);
  }

});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});