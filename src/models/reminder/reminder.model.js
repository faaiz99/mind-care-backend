const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reminderSchema = new Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
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
  turnOn:{
    type:Boolean,
  }
}); 

const Reminder = mongoose.model("reminder", reminderSchema);
module.exports = Reminder;


