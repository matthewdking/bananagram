const { handleHome, handlePublic, notFound } = require('./handlers');

const router = (req, res) => {
  const url = req.url;
  console.log(url);
  if (url === '/'){
    handleHome(res);
  }
  else if (url.indexOf('/public') !== -1) {
    handlePublic(res, url);
  }
  else {
    notFound(req, res)
  }
}

module.exports = router;
