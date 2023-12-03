import { Schema, model, Model } from "mongoose";
import { IReminder } from "../../types/IReminder.js";

const reminderSchema = new Schema<IReminder>({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "client",
  },
  type: {
    type: String,
  },
  time: {
    type: String,
  },
  repeatDaily: {
    type: Boolean,
  },
  turnOn: {
    type: Boolean,
  },
});

export const Reminder: Model<IReminder> = model<IReminder>(
  "reminder",
  reminderSchema,
);
