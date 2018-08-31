const RoomsRouter = require('./rooms/router');
const UsersRouter = require('./users/router');
const AuthRouter = require('./auth/router');

module.exports = app => {
  app.use('/Rooms', RoomsRouter);
  app.use('/Users', UsersRouter);
  app.use('/auth', AuthRouter);
};
