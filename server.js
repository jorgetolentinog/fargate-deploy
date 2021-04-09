var http = require("http");

http
  .createServer(function (req, res) {
    res.write("Release 1");
    res.end();
  })
  .listen(80);
