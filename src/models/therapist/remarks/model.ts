import { Schema, model, Types } from "mongoose";

const therapistRemarksSchema = new Schema({
  createdAt: {
    type: Date,
  },
  body: {
    type: String,
  },
  therapist: {
    type: Types.ObjectId,
    ref: "therapist",
  },
  client: {
    type: Types.ObjectId,
    ref: "client",
  },
});

const therapistRemarks = model("therapistRemarks", therapistRemarksSchema);
module.exports = therapistRemarks;
