const http = require('http');
const url = require('url');
const HOST = 'localhost';
const port = 3000;

let movies =
  [
    {
      "id": 12,
      "title": "Forrest Gump",
      "genre": "drama"
    },
    {
      "id": 23,
      "name": "Mission Impossible 18",
      "genre": "action"
    }
  ];

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (req.method === 'GET' && reqUrl.pathname === '/movies') {
    let response;
    if (reqUrl.query.id) {
      response = movies.filter((m) => m.id === parseInt(reqUrl.query.id));
    } else {
      response = movies;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
    return;
  }

  if (req.headers.authorization !== 'top secret') {
    res.statusCode = 403;
    res.end();
    return;
  }

  if (req.method === 'DELETE' && reqUrl.pathname === '/movies') {
    console.log(req.headers);
    const newMovies = movies.filter((m) => m.id !== parseInt(reqUrl.query.id));
    if (movies.length === newMovies) {
      res.statusCode = 404;
      res.end();
      return;
    }
    movies = newMovies;
    console.log(movies);
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === 'POST' && reqUrl.pathname === '/movies') {
    let bodyStr = '';
    req.on('data', (chunk) => {
      bodyStr += chunk;
    }).on('end', () => {
      const body = JSON.parse(bodyStr);
      if (!body.title) {
        res.statusCode = 400;
        res.end();
        return;
      }
      if (movies.filter((m) => m.title === body.title).length > 0) {
        res.statusCode = 409;
        res.end();
        return;
      }
      if (!body.genre) {
        body.genre = 'unknow'
      }
      movies.push(body);
      res.statusCode = 201;
      res.end();
      return;
    });
  }

  res.statusCode = 404;
  res.end('not found');
});

server.listen(port, HOST, () => {
  console.log(`Server running at http://${HOST}:${port}/`);
});
