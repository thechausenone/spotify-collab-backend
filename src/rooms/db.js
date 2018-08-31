const { RoomModel } = require('./model');

const createRoom = update => {
  const newRoom = new RoomModel(update);
  return newRoom.save();
};

const findAllRooms = () => RoomModel.find({});

module.exports = {
  createRoom,
  findAllRooms
};
