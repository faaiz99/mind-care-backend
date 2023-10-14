import { Schema, Document } from "mongoose";

interface IReminder extends Document {
  clientId: Schema.Types.ObjectId;
  type: string;
  time: Date;
  repeatDaily: boolean;
  turnOn: boolean;
}
