import { Schema, Document } from "mongoose";

export interface INotification extends Document {
  clientId: Schema.Types.ObjectId;
  therapistId: Schema.Types.ObjectId;
  notificationBody: string;
  notificationTitle: string;
  notificationTime: Date;
  read: boolean;
}
