import http from "http";

http.get('http://localhost:3000', (res) => {
  let data: Buffer[] = [];

  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended:', Buffer.concat(data).toString());
  });
});
