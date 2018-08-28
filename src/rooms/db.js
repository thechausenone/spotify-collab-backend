const Room = require('./model');

const createRoom = update => {
  const newRoom = new Room(update);
  return newRoom.save();
};

module.exports = {
  createRoom
};
