const roomsDB = require('./db');

const createRoom = ({ name, description, creator }) => {
  const filteredUpdate = { name, description, creator };
  return roomsDB.createRoom(filteredUpdate);
};

const findAllRooms = () => roomsDB.findAllRooms();

module.exports = { createRoom, findAllRooms };
