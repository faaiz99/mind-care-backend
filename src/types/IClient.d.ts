import { Document } from "mongoose";

export interface IClient extends Document {
	firstName: string;
	lastName: string;
	email: string;
	gender?: string; // Marked as optional
	password: string;
	verifiedAccount?: boolean; // Marked as optional
	profilePicture?: string; // Marked as optional
	dateOfBirth?: Date; // Marked as optional
	createdAt?: Date; // Marked as optional
  }