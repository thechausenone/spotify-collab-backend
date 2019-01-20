const express = require('express');
const bodyParser = require('body-parser');

const authConfig = require('./auth.config');
const mountRoutes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

authConfig(app);
mountRoutes(app);

app.get('/', (req, res) => {
  if (req.user) {
    res.send(`Hello ${req.user.name}! Go to /auth/logout to logout!`);
  } else {
    res.send('Go to /auth/spotify to Login!');
  }
});

module.exports = app;
