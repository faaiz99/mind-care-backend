import { Schema, model } from "mongoose";
import { ITeletherapy, IMessage } from "../../types/ITeletherapy.js";

export const MessageSchema: Schema = new Schema<IMessage>({
  message: {
    type: String,
    required: true,
  },
  senderRole: {
    type: String,
    required: true,
  },
  senderId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  receiverRole: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
});

const TeletherapySchema = new Schema<ITeletherapy>({
  senderId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  chat: {
    type: [MessageSchema],
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false
  },

});

export const Teletherapy = model<ITeletherapy>(
  "teletherapy",
  TeletherapySchema,
);
