const http = require('http');
const countStudents = require('./3-read_file_async');

// Get database file path from command-line argument
const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    countStudents(database)
      .then((data) => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.statusCode = 200;
    res.end('Hello ALX!');
  }
});

app.listen(1245);

module.exports = app;
