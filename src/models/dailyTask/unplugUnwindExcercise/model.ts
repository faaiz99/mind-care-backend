import { Schema, model, Types } from 'mongoose'


const unplugUnwindSchema = new Schema({
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

export const UnplugUnwindExcercise = model(
  "unplugUnwindExcerciseSchema",
 unplugUnwindSchema
);
