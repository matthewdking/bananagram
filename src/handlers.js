const path = require('path');
const fs = require('fs');
//const findWords = require('./logic')

var headers = {
  'content-type' : 'text/html'
}

const handleHome = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, headers);
      res.end("<h1>We fucked up</h1>");
    } else {
      res.writeHead(200, headers);
      res.end(file);
    }
  });
}

const notFound = (req, res) => {
  res.writeHead(404, headers);
  res.end('We can\'t find what you\'re looking for');
}

module.exports = {
  handleHome,
  notFound
}
