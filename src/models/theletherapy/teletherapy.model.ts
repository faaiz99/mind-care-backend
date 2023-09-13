import { Schema, model } from 'mongoose'


const teletherapySchema = new Schema(
  {
  therapistId: {
    type: String,
  },
  clientId: {
    type: String,
  },

  message: {
    type: String,
  },
});

export const Chat = model("Teletherapy", teletherapySchema);

