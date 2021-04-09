var http = require("http");

http
  .createServer(function (req, res) {
    res.write("Release 2");
    res.end();
  })
  .listen(80);
