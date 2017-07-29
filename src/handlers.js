const path = require('path');
const fs = require('fs');
//const findWords = require('./logic')

var headers = {
  'content-type' : 'text/html'
}

const handleHome = (res) => {
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

const handlePublic = (res, url) => { //declare handlePublic as a function
  const filePath = path.join(__dirname, '..', url); // declare filePath as path to file
  const extension = url.split('.')[1]; //splt url on the dot to work out file type eg html, jpg, css
  const extensionType = { //array of extensions as keys and values
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon'
  }
  fs.readFile(filePath, (err, file) => { //read file with err first callback
    if (err) { //if err do this
      console.log(err); // log err
      res.writeHead(500, 'Content-Type: text/html'); // err code 500
      res.end('<h1>Sorry Mario broke the server</h1>'); // end connection and send this html
    }
    else { //else do this
      res.writeHead(200, `Content-Type: ${extensionType[extension]}`); // code 200 with content type found using extension type object
      res.end(file); // end connection and send file
    }
  })
}

const notFound = (req, res) => {
  res.writeHead(404, headers);
  res.end('We can\'t find what you\'re looking for');
}

module.exports = {
  handleHome,
  handlePublic,
  notFound
}
