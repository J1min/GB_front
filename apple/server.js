const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;
app.set("view engine", "ejs");
// app.set("view", "./views");/
var cnt = 0;
app.post("/add", function (req, res) {
  var info = { _id: cnt, 할일: req.body.title, 날짜: req.body.date };
  res.sendFile(__dirname + "/ok.html");
  db.collection("data").insertOne(info, function (err, res) {
    console.log("저장완료");
  });
  cnt = cnt + 1;
});

var db;
MongoClient.connect(
  "mongodb+srv://admin:qwer1234@cluster0.rjy7d.mongodb.net/apple?retryWrites=true&w=majority",
  function (err, client) {
    if (err) return console.log(err);

    db = client.db("apple");
    app.listen(port, function () {
      console.log(`listening on ${port}`);
    });
  }
);

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

app.get("/list", function (req, res) {
  res.render("list.ejs");
});
app.use(function (req, res, next) {
  res.status(404).sendFile(__dirname + "/404.html");
});
// app.get("/test", function (req, res) {
//   res.render("/components/test.vue"); // 일단 개발 중임니다
// });
