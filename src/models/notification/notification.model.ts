import { Schema, model, Document, Model } from "mongoose";

export interface INotification extends Document {
  clientId: Schema.Types.ObjectId;
  therapistId: Schema.Types.ObjectId;
  notificationBody: string;
  notificationTitle: string;
  notificationTime: Date;
  read: boolean;
}

const notificationSchema = new Schema<INotification>({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "client",
    required: false,
  },
  therapistId: {
    type: Schema.Types.ObjectId,
    ref: "therapist",
    required: false,
  },
  notificationBody: {
    type: String,
  },
  notificationTitle: {
    type: String,
  },
  notificationTime: {
    type: Date,
    default: Date.now(),
  },
  read: {
    type: Boolean,
    default: false,
  },
});

export const Notification: Model<INotification> = model(
  "notification",
  notificationSchema,
);
