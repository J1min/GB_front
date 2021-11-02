const http = require("http");
const port = 8080;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>반갑노</h1>");
    res.end("<p>그래그래</p>");
  })
  .listen(port, () => {
    console.log(`listening on ${port}`);
  });
