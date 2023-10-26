import { model, Schema } from "mongoose";
const notificationSchema = new Schema({
  clientId:{
    type:Schema.Types.ObjectId,
    ref:'client',
    required:false
  },
  therapistId:{
    type:Schema.Types.ObjectId,
    ref:'therapist',
    required:false
  },
  notificationBody: {
    type: String,
  },
  notificationTitle: {
    type: String,
  },
  notificationTime: {
    type:Date,
    default: Date.now(),
  },
  read:{
    type:Boolean,
    default:false,
  }
});

export const Notification = model("notification", notificationSchema);
