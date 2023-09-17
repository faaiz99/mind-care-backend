import {Schema, model, Types, Model} from 'mongoose'
import { IAppointment } from '../../types/IAppointment.js';

const appointmentSchema = new Schema<IAppointment>({
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

export const Appointment:Model<IAppointment> = model<IAppointment>("appointment", appointmentSchema);
