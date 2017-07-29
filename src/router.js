const handlers = require('./handlers');

var routes = {
  '/' : handlers.handleHome,
  '404' : handlers.notFound
}

module.exports = function(req, res) {
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    routes[404](req, res);
  }
}
