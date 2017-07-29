const handlers = require('./handlers');

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    handlers.handleHome(response);
  } else {
    response.writeHead(404, "Content-Type:text/html");
    response.end("<h1>We fucked up</h1>");
  }
}

module.exports = router;
