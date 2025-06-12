const http = require('http');

const app = http.createServer();

app.on('request', (_, res) => {
  const responseMsg = 'Hello ALX!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseMsg.length);
  res.write(Buffer.from(responseMsg));
});

app.listen(1245);

module.exports = app;
