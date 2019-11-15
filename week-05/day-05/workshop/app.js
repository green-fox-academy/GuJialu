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

  if (!req.body.until) {
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

app.post('/arrays', (req, res) => {
  const what = req.body.what;
  const numbers = req.body.numbers;

  if (!what || !numbers) {
    res.send({
      error: "Please provide what to do with the numbers!"
    });
    return;
  }

  let result;
  switch (what) {
    case 'sum':
      result = numbers.reduce((a, b) => a + b);
      break;
    case 'multiply':
      result = numbers.reduce((a, b) => a * b);
      break;
    case 'double':
      result = numbers.map((x) => 2 * x);
      break;
    default:
      res.send({
        error: "Please provide what to do with the numbers!"
      });
      return;
  }

  res.send({
    result: result
  });

});

app.post('/sith', (req, res)=>{

  function reverseSentence (sentence)  {
    const words = sentence.split(' ');
    for(let i=0; i+1<words.length; i+=2){
      if(i===0){
        words[i] = words[i].substring(0, 1).toLowerCase() + words[i].substring(1);
        words[i+1] = words[i+1].substring(0, 1).toUpperCase() + words[i+1].substring(1);
      }
      [words[i], words[i+1]] = [words[i+1], words[i]];
      console.log(words);
    }
    words.push('emmmm');
    return words.join(' ');
  }

  const text = req.body.text;

  if(!text || text.length===0){
    res.send({
      error: 'Feed me some text you have to, padawan young you are. Hmmm.'
    });
    return;
  }

  const sentences = text.split('. ');
  const sithText = sentences.map((x)=>reverseSentence(x)).join('. ');

  res.send({
    sith_text: sithText
  })

});

// start express app on port 8080
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});