const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/sock.html");
});

server.listen(port, () => {
  console.log("listening on " + port);
});

io.on("connection", (socket) => {
  console.log("a user connected");
});
