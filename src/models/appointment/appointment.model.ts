import {Schema, model, Types} from 'mongoose'

const appointmentSchema = new Schema({
  therapistId: {
    type: Types.ObjectId,
    ref:'therapist'
  },
  clientId: {
    type: Types.ObjectId,
    ref:'client'
  },
  appointmentDate: {
    type: Date,
  },
  appointmentTime: {
    type: Date,
  },
  appointmentCharges: {
    type: String,
  },
  problemDescription: {
    type: String,
  },
  status: {
    type: String,
  },
});

export const Appointment = model("appointment", appointmentSchema);
