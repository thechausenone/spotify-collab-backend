const mongoose = require('mongoose');
const { UserSchema } = require('../users/model');

const { Schema } = mongoose;

const RoomSchema = new Schema(
  {
    name: {
      type: String
    },
    description: { type: String },
    users: {
      type: [UserSchema]
    },
    creator: {
      type: String
    }
  },
  { timestamps: true }
);

const RoomModel = mongoose.model('Room', RoomSchema);

module.exports = {
  RoomSchema,
  RoomModel
};
