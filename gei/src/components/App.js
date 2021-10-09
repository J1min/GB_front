const express = require("express");
const app = express();
const port = 8081;
const path = require("path");

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "./components/1Start.vue"));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
