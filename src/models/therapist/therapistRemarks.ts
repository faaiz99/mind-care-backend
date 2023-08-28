import mongoose from "mongoose";
const Schema = mongoose.Schema;

const therapistRemarksSchema = new Schema({
  createdAt: {
    type: Date,
  },
  body: {
    type: String,
  },
  therapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "therapist",
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
});

const therapistRemarks = mongoose.model(
  "therapistRemarks",
  therapistRemarksSchema
);
module.exports = therapistRemarks;
