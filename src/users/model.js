const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  spotifyId: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: false
  }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = {
  UserSchema,
  UserModel
};
