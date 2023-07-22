const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const therapistRemarksSchema = new Schema({
  createdAt: {
    type: Date,
  },
  body: {
    type: String,
  },
  therapist: {
    type: mongoose.Types.ObjectId,
    ref: therapist,
  },
  client: {
    type: mongoose.Types.ObjectId,
    ref: client,
  },
});

const therapistRemarksModel = mongoose.model(
  "therapistRemarks",
  therapistRemarksSchema
);
module.exports = therapistRemarksModel;
