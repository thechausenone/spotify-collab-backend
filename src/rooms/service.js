const roomsDB = require('./db');

const createRoom = ({ name, description, creator }) => {
  const filteredUpdate = { name, description, creator };
  return roomsDB.createRoom(filteredUpdate);
};

module.exports = { createRoom };
