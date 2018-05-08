const express = require( 'express');
const path = require( 'path');

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Add a cache control header to the response to prevent caching
app.use(function(req, res, next) {
  if (!res.getHeader('Cache-Control')) {
    res.setHeader('Cache-Control', 'no-cache');
  }
  next();
});

// start server on port 3000
var server = app.listen(3000, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port);
});