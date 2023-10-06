import { Document, Schema  } from 'mongoose';

// Define the Sleep Document Interface
export interface IRescueSession extends Document {
  clientId?: Schema.Types.ObjectId;
  checkInDate: Date;
  questions: string[];
  results: string[];
  listened: boolean;
}
