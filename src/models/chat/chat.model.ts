import {Schema, model} from 'mongoose'


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

export const chatModel = model("chat", chatSchema);

