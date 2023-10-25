import http from "http";
import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  res.header('Content-Type', 'text/html');
  res.write("hello");
  res.end("end");
})

http.createServer(app).listen(3000, () => {
  console.log('http://localhost:3000');
});
