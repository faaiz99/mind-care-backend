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

// const teletherapySchema = new Schema(
//   {
//     therapistId: {
//       type: String,
//     },
//     clientId: {
//       type: String,
//     },
//     callStartTimeStamp: {
//       type: Date,
//       required: true
//     },
//     callEndTimeStamp: {
//       type: Date,
//       required: true,
//       default: Date.now()
//     },
//     message: {
//       type: String,
//     }
//   }
//   ,
//   {
//     timestamps: true
//   }
// );

export const Teletherapy = model("Teletherapy", teletherapySchema);

