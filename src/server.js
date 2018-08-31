const express = require('express');
const bodyParser = require('body-parser');
const mountRoutes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mountRoutes(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
