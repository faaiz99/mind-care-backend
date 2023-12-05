import { Schema, Document } from "mongoose";

export interface IEmotionProfile {
  checkinDate: Date;
  emotion: string;
  specificEmotion: string;
  reasonOfEmotion: string;
  elaborationText: string;
  stressTimeline: string;
}

export interface IPsychologicalProfile extends Document {
  clientId: Schema.Types.ObjectId;
  profile: IEmotionProfile[];
  depressionTest?: Types.ObjectId;
  anxietyTest?: Types.ObjectId;
  depressionTestTime?: Date;
  anxietyTestTime?: Date;
  depressionTestEnabled?: boolean;
  anxietyTestEnabled?: boolean;
  diagnosedResult?: string;
  diagnosedResultPercentage?: number;
}

export interface IDiagnosisResults {
  diagnosedResult: string;
  diagnosedResultPercentage: number;
}
