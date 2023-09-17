import { Document } from "mongoose";

export interface IAdmin extends Document {
	firstName: string;
	lastName: string;
	email: string;
	gender: string;
	role: string;
	password: string;
	verifiedAccount?: boolean;
	profilePicture?: string;
	dateOfBirth?: Date;
  }