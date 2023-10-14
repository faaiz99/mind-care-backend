import { Document, Types } from "mongoose";

export interface IPayment extends Document {
  clientId: Schema.Types.ObjectId;
  sessionCharges: string;
  currency: string;
  paymentDate: Date;
  therapistId: Types.ObjectId;
  appointmentId: Types.ObjectId;
}
