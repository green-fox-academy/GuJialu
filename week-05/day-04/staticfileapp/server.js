const express = require('express');

const PORT = 3000;

const app = express();

app.use(express.static('assets'));

app.listen(PORT, ()=>console.log('listening on '+PORT));