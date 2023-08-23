import { Schema, model , Types} from 'mongoose'

const reminderSchema = new Schema({
  clientId: {
    type: Types.ObjectId,
    ref: 'client'
  },
  type: {
    type: String,
  },
  time: {
    type: Date,
  },
  repeatDaily: {
    type: Boolean,
  },
  turnOn: {
    type: Boolean,
  }
});

export const Reminder = model("reminder", reminderSchema);


