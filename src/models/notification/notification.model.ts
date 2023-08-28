import {model, Schema} from 'mongoose'
const notificationSchema = new Schema({
  notificationBody: {
    type: String,
  },
  notificationTitle: {
    type: String,
  },
  notificationTime: {
    type: String,
  },
  sentMedia: {},
});

export const notificationModel = model("notification", notificationSchema);
