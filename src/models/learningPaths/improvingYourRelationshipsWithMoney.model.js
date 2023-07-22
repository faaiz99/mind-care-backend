const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const improvingYourRelationshipsWithMoneySchema = new Schema({
  questions: {
    type: String,
  },
  results: {
    type: String,
  },
  content: {
    type: String,
  },
  audio: {
    type: String,
  },
});

const improvingYourRelationshipsWithMoneyModel = mongoose.model(
  "improvingYourRelationshipsWithMoney",
  improvingYourRelationshipsWithMoneySchema
);
module.exports = improvingYourRelationshipsWithMoneyModel;
