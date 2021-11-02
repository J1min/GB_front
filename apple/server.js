const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;
  
MongoClient.connect("mongodb+srv://admin:qwer1234@cluster0.rjy7d.mongodb.net/apple?retryWrites=true&w=majority", function (err, client) {
  app.listen(port, function () {
    console.log(`listening on ${port}`);
  });
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

app.get("/write", function (req, res) {
  res.sendFile(__dirname + "/write.html");
});

app.post("/add", function (req, res) {
  res.send("전송완료");
  console.log(req.body.title);
  console.log(req.body.date);
});
