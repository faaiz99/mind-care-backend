import { Document } from "mongoose";

export interface ITherapist extends Document {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  role?: string; // Marked as optional
  password: string;
  verifiedAccount?: boolean; // Marked as optional
  picture?: string; // Marked as optional
  dateOfBirth: Date;
  createdAt?: Date; // Marked as optional
  dateOfAvailability?: Date; // Marked as optional
  timeOfAvailability?: Date; // Marked as optional
  sessionCharges?: string; // Marked as optional
  experience: string;
  downloadURL: string;
  specialization: string;
}
