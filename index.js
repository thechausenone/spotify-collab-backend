const server = require('./src/server');

server.listen(3000);

process.on('uncaughtException', err => {
  // eslint-disable-next-line
  console.error(err, "Uncaught Exception thrown");
  process.exit(1);
});
