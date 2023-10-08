import { Schema, Document } from 'mongoose';

interface IMember {
  clientId: Schema.Types.ObjectId | string;
  therapistId: Schema.Types.ObjectId | string;
}

interface ITeletherapy extends Document {
  members: IMember[];
  createdAt: Date;
  updatedAt: Date;
}