require('dotenv').config();
require('./src/db.config');
const server = require('./src/server');

const { PORT } = process.env;

server.listen(PORT || 3000);

process.on('uncaughtException', err => {
  // eslint-disable-next-line
  console.error(err, 'Uncaught Exception thrown');
  process.exit(1);
});
