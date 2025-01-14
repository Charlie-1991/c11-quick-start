const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

var server = app.listen(5150, function () {
  var port = server.address().port;
  console.log("Server started on", port);
});

app.get("/", function (req, res) {
  res.send("Server is up and running.");
});

var index = 100;
app.get("/index", function (req, res) {
  res.send(index.toString());
});
