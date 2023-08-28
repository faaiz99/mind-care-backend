import {Schema, model} from 'mongoose'


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

export const improvingYourRelationshipsWithMoney = model(
  "improvingYourRelationshipsWithMoney",
  improvingYourRelationshipsWithMoneySchema
);
