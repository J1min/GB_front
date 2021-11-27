const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const MongoClient = require("mongodb").MongoClient;
app.set("view engine", "ejs");

var db;
MongoClient.connect(
  "mongodb+srv://admin:qwer1234@cluster0.rjy7d.mongodb.net/mongoose?retryWrites=true&w=majority",
  function (err, client) {
    if (err) return console.log(err);
    db = client.db("mongoose");
    app.listen(port, function () {
      console.log(`listening on ${port}`);
    });
  }
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/write", function (req, res) {
  res.sendFile(__dirname + "/write.html");
});

app.get("/#list", function (req, res) {
  db.collection("data")
    .find()
    .toArray(function (err, result) {
      res.render("list.ejs", { data: result });
    });
});

app.post("/add", function (req, res) {
  res.send("전송 완료");
  var info = { 제목: req.body.title, 날짜: req.body.date };
  db.collection("data").insertOne(info, function () {
    console.log("전송완료입니다람쥐썬더");
  });
});
