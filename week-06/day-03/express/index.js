const express = require('./fake-express');
const PORT = 3000;

const app = express();

app.get('/fda', (req, res) => {
  res.send({ fda: 'hahahaha' });
});

app.get('/fda2', (req, res) => {
  res.send({ fda2: 'hahahaha2' });
});

// start express app on port 8080
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});