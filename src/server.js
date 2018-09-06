const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');

const { COOKIE_KEY } = process.env;

const mountRoutes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());

mountRoutes(app);

app.get('/', (req, res) => {
  if (req.user) {
    res.send(`Hello ${req.user.name}! 'Go to /auth/logout to logout!`);
  } else {
    res.send('Go to /auth/spotify to Login!');
  }
});

module.exports = app;
