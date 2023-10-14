import { Schema, model, Types } from 'mongoose'


const breathingExcerciseSchema = new Schema({
  clientId: {
    type: Types.ObjectId,
    ref: 'client'
  },
  createdAt: {
    type: Date
  },
  completed:{
    type:Boolean,
    required:true
  }
});

export const BreathingExcercise = model(
  "breathingExcerciseSchema",
  breathingExcerciseSchema
);
