const mongoose = require('mongoose');

const { Schema } = mongoose;

const RoomSchema = new Schema(
  {
    name: {
      type: String
    },
    description: { type: String },
    users: {
      type: [String]
    },
    creator: {
      type: String
    }
  },
  { timestamps: true }
);

const RoomModel = mongoose.model('Room', RoomSchema);

module.exports = RoomModel;
