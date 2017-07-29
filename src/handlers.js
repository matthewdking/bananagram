const path = require('path');
const fs = require('fs');
const findMatches = require('./logic')

const handleHome = (response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, "Content-Type:text/html");
      response.end("<h1>We fucked up</h1>");
    } else {
      response.writeHead(200, "Content-Type:text/html");
      response.end(file);
    }
  });
}


module.exports = {
  handleHome
}
