import { Schema, model } from 'mongoose'


const teletherapySchema = new Schema(
  {
    therapistId: {
      type: String,
    },
    clientId: {
      type: String,
    },
    callStartTimeStamp: {
      type: Date,
      required: true
    },
    callEndTimeStamp: {
      type: Date,
      required: true,
      default: Date.now()
    },
    message: {
      type: String,
    },

  });

export const Chat = model("Teletherapy", teletherapySchema);
