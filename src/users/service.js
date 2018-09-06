const usersDB = require('./db');

const createUser = ({ name, spotifyId, profilePicture }) => {
  const filteredUpdate = {
    name,
    spotifyId,
    profilePicture
  };
  return usersDB.createUser(filteredUpdate);
};

const findUserBySpotifyId = spotifyId => usersDB.findUserBySpotifyId(spotifyId);

const findUserById = id => usersDB.findUserById(id);

module.exports = { createUser, findUserBySpotifyId, findUserById };
