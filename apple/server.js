const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;
app.set("view engine", "ejs");

// app.set("view", "./views");/

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
app.post("/add", function (req, res) {
  db.collection("count").findOne(
    { name: "게시물갯수" },
    function (err, result) {
      var totalCount = result.count;
      console.log(totalCount);
      var info = {
        _id: totalCount + 1,
        할일: req.body.title,
        날짜: req.body.date,
      };
      db.collection("data").insertOne(info, function (err, res) {
        console.log("저장완료");
      });
    }
  ); // 데이터를 1개만 찾는 부분

  res.sendFile(__dirname + "/ok.html");
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

app.get("/list", function (req, res) {
  db.collection("data")
    .find()
    .toArray(function (err, result) {
      console.log(result);
      res.render("list.ejs", { data: result });
    });
});

// app.get("/test", function (req, res) {
//   res.render("components/test.vue"); // 일단 개발 중임니다
// });

app.use(function (req, res, next) {
  res.status(404).sendFile(__dirname + "/404.html");
});
