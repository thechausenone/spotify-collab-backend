const { UserModel } = require('./model');

const createUser = async update => {
  const newUser = await new UserModel(update);
  return newUser.save();
};

const findUserBySpotifyId = async spotifyId => {
  const user = await UserModel.findOne({ spotifyId });
  return user;
};

const findUserById = async id => {
  const user = await UserModel.findById(id);
  return user;
};

module.exports = {
  createUser,
  findUserBySpotifyId,
  findUserById
};
