import { Document, Schema } from 'mongoose';

export interface ITherapistReview extends Document {
	rating:number,
	review:string
}

export interface IAppointment extends Document {
	therapistId: Schema.Types.ObjectId;
	clientId: Schema.Types.ObjectId;
	appointmentDate: Date;
	appointmentTime: Date;
	appointmentCharges: string;
	problemDescription: string;
	status: string;
	feedback?:string;
	therapistReview?:ITherapistReview
  }