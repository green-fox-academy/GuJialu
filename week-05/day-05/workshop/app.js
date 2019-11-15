const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/doubling', (req, res) => {

  const input = parseInt(req.query.input);
  console.log(input);
  if (input) {
    res.send({
      received: input,
      result: 2 * input
    });
  } else {
    res.send({
      error: 'Please provide an input!'
    });
  }

});

app.get('/greeter', (req, res) => {

  const name = req.query.name;
  const title = req.query.title;

  if (name && title) {
    res.send({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`
    });
  } else if (!name && title) {
    res.send({
      error: 'Please provide a name'
    });
  } else if (name && !title) {
    res.send({
      error: 'Please provide a title'
    });
  } else {
    res.send({
      error: 'Please provide a name and a title!'
    });
  }

});

app.get('/appenda/:name', (req, res) => {
  const name = req.params.name + 'a';
  console.log(name);
  res.send({
    appended: name
  });
});

app.post('/dountil/:action', (req, res) => {
  console.log(req.params);

  if(!req.body.until){
    res.send({
      error: 'Please provide a number!'
    });
    return
  }

  let result;
  switch (req.params.action) {
    case 'sum':
      result = 0;
      for (let i = 0; i <= req.body.until; i++) {
        result += i;
      }
      break;
    case 'factor':
      result = 1;
      for (let i = 1; i <= req.body.until; i++) {
        result *= i;
      }
      break;
    default:
  }
  res.send({
    result: result
  });
});

// start express app on port 8080
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});