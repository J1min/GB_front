const express = require("express");
const app = express();
const port = 8080;

app.listen(port, function () {
  console.log(`listening on ${port}`);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/pet", function (req, res) {
  res.sendFile(__dirname + "/pet.html");
});

app.get("/beauty", function (req, res) {
  res.sendFile(__dirname + "/beauty.html");
});

// 주석