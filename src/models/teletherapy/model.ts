import { Schema, model } from 'mongoose'


const teletherapySchema = new Schema(
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

export const Teletherapy = model("teletherapy", teletherapySchema);

