const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  therapistName: {
    type: String,
  },
  clientNmae: {
    type: String,
  },
  appointmentDate: {
    type: Date,
  },
  appointmentTime: {
    type: Date,
  },
  appointmentCharges: {
    type: String,
  },
  problemDescription: {
    type: String,
  },
  status: {
    type: String,
  },
});

const appointmentModel = mongoose.model("chat", appointmentSchema);
module.exports = appointmentModel;
