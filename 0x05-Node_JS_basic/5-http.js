const http = require('http');
const countStudents = require('./3-read_file_async');

// Get database file path from command-line argument
const db_file = process.argv[2];
const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseTxt = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseTxt.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseTxt));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const resParts = ['This is the list of our students'];

      countStudents(db_file)
        .then((report) => {
          resParts.push(report);
          const responseTxt = resParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseTxt.length);
          res.statusCode = 200;
          res.end(responseTxt);
        })
        .catch((err) => {
          resParts.push(err instanceof Error ? err.message : err.toString());
          const responseTxt = resParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseTxt.length);
          res.statusCode = 200;
          res.end(responseTxt);
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
