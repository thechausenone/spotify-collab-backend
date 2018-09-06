const passport = require('passport');
const AuthRouter = require('express').Router();

require('./service');

AuthRouter.get('/spotify', passport.authenticate('spotify'), (req, res) => {
  // The request will be redirected to spotify for authentication, so this
  // function will not be called.
});

AuthRouter.get(
  '/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('Successful authentication, redirect home.');
    res.redirect('/');
  }
);

AuthRouter.get('/logout', (req, res) => {
  req.logout();
  console.log('Successful logout, redirect home.');
  res.redirect('/');
});

module.exports = AuthRouter;
