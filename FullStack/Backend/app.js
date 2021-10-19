const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

app.listen(port, function() {
  console.log(`listening on ${port}`);
});

app.get("/", function(요청, 응답) {
  응답.sendFile(path.join(__dirname + "../public/index.html")); 
});
