const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reminderSchema = new Schema({
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


