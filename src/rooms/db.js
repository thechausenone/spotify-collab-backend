const Room = require('./model');

const createRoom = update => {
  const newRoom = new Room(update);
  return newRoom.save();
};

const findAllRooms = () => Room.find({});

module.exports = {
  createRoom,
  findAllRooms
};
