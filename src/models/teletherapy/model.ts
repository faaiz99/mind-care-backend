import { Schema, model, Model } from 'mongoose'
import { ITeletherapy } from '../../types/ITeletherapy.js';


const teletherapySchema = new Schema<ITeletherapy>(
  {
    members: [{
      clientId: {
        type:Schema.Types.ObjectId,
        ref: 'client'
      },
      therapistId:{
        type:Schema.Types.ObjectId,
        ref: 'therapist'
      }
    }]
  }
  ,
  {
    timestamps: true
  }
);

export const Teletherapy:Model<ITeletherapy> = model<ITeletherapy>("teletherapy", teletherapySchema);

