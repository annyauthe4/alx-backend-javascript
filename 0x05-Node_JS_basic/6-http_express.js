// 6-http_express.js
const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
