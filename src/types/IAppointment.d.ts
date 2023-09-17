import { Document } from 'mongoose';


interface IAppointment extends Document {
	therapistId: Schema.Types.ObjectId;
	clientId: Schema.Types.ObjectId;
	appointmentDate: Date;
	appointmentTime: Date;
	appointmentCharges: string;
	problemDescription: string;
	status: string;
  }