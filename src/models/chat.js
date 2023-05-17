const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  therapistName: {
    type: String,
  },
  clientNmae: {
    type: String,
  },
  message: {
    type: String,
  },
  sentMedia: {
    type: [
      {
        document: {
          type: String,
        },
      },
      {
        media: {
          type: String,
        },
      },
      {
        link: {
          type: String,
        },
      },
    ],
  },
});

const chatModel = mongoose.model("chat", chatSchema);
module.exports = chatModel;
