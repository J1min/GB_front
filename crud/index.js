const express = require("express");
const app = express();
const port = 8090;

app.listen(port, () => {
  console.log("listening on " + port);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/hi", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
