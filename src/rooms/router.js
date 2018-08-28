const RoomsRouter = require('express').Router();
const RoomsService = require('./service');

RoomsRouter.post('/', (req, res, next) => {
  const update = req.body;
  RoomsService.createRoom(update)
    .then(room => res.status(200).send(room))
    .catch(err => next(err));
});

module.exports = RoomsRouter;
