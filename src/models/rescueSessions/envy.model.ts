import { Schema, model, Model } from 'mongoose'
import { IRescueSession } from '../../types/IRescueSession.js';

const envySchema = new Schema<IRescueSession>({
  clientId:{
    type:Schema.Types.ObjectId,
    required:true
  },
  checkInDate: {
    type: Date,
    required: true
  },
  questions: [{
    type: String,  required:true
  }],
  results: [{
    type: String, required:true
  }],
  listened: {
    type: Boolean,
    required:true
  }
});

export const Envy:Model<IRescueSession> = model<IRescueSession>("envy", envySchema);
