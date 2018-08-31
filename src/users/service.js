const usersDB = require('./db');

const createUser = ({
  name,
  spotifyId,
  accessToken,
  profilePicture,
  refreshToken
}) => {
  const filteredUpdate = {
    name,
    spotifyId,
    accessToken,
    profilePicture,
    refreshToken
  };
  return usersDB.createUser(filteredUpdate);
};

const findUser = spotifyId => usersDB.findUser(spotifyId);

const findUserById = id => usersDB.findUserById(id);

module.exports = { createUser, findUser, findUserById };
