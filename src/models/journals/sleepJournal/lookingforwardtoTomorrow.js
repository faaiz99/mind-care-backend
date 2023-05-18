const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lookingforwardtoTomorrowSchema = new Schema({
  questions: {
    type: String,
  },
  answers: {
    type: String,
  },
  date:{
    type:Date
  }
});

const lookingforwardtoTomorrow = mongoose.model("lookingforwardtoTomorrow", lookingforwardtoTomorrowSchema);
module.exports = lookingforwardtoTomorrow;
