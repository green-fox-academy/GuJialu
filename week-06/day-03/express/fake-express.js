const http = require('http');
const url = require('url');



module.exports = () => new App();
  
class App {
  
  constructor() {
    this.endpoints = {};
  }

  listen(port, cb) {
    const server = http.createServer(async (req, res) => {
      const reqUrl = url.parse(req.url, true);
      const endpoint = this.endpoints[reqUrl.pathname][req.method];
      if (endpoint) {
        endpoint(req, res);
      } else {
        res.statusCode = 404;
        res.end('not found');
      }
    });

    server.listen(port, 'localhost', cb);
  }

  get(path, handler) {
    const endpoint = async (req, res) => {
      const expressReq = new ExpressReq(req);
      await expressReq.getBody();
      const expressRes = new ExpressRes(res);
      handler(expressReq, expressRes);
      return true;
    }
    this.endpoints[path] = {};
    this.endpoints[path]['GET'] = endpoint;
  }

}

class ExpressReq {

  constructor(nodeReq) {
    this.nodeReq = nodeReq;
    this.query = url.parse(nodeReq.url, true).query;
    this.bodyStr = '';
    this.body = {};
  }

  getBody() {
    return new Promise((resolve) => {
      this.nodeReq.on('data', (chunk) => {
        this.bodyStr += chunk;
      }).on('end', () => {
        this.body = JSON.parse(this.bodyStr);
        resolve();
      });
    });
  }

}

class ExpressRes {

  constructor(nodeRes) {
    this.nodeRes = nodeRes;
  }

  send(response) {
    this.nodeRes.end(JSON.stringify(response));
  }

  status(code) {
    this.nodeRes.statusCode = code;
  }

}