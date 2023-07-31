import {Schema, model, Types } from 'mongoose'

const openJournalSchema = new Schema({
  clientId: {
    type: Types.ObjectId,
    ref: 'client'
  },
  questions: {
		type: [String],
	  },
	  answers: {
		type: [String],
	  },
  createdAt:{
		type:Date
	  }
});

export const OpenJournal = model("openJournal", openJournalSchema);
