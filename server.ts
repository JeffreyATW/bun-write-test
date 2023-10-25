import http from "http";

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write("hello");
  res.end("end");
}).listen(3000, () => {
  console.log('http://localhost:3000');
});
