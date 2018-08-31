const RoomsRouter = require('./rooms/router');

module.exports = app => {
  app.use('/Rooms', RoomsRouter);
};
