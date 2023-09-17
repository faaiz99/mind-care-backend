import { Schema, model, Model } from 'mongoose'
import { IPayment } from '../../types/IPayment.js';

const paymentSchema = new Schema<IPayment>({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'client',
    required: true
  },
  sessionCharges: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  therapistId: {
    type: Schema.Types.ObjectId,
    ref: 'therapist',
    required: true
  },
  appointmentId: {
    type: Schema.Types.ObjectId,
    ref: 'appointment',
    required: true
  }
});

export const Payment: Model<IPayment> = model<IPayment>("payment", paymentSchema);