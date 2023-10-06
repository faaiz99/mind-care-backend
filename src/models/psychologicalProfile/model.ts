import { Schema, model, Model } from 'mongoose'
import { IPsychologicalProfile } from '../../types/IPsychologicalProfile.js';

const psychologicalProfileSchema = new Schema<IPsychologicalProfile>({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'client'
  },
  profile:[{
    checkinDate: {
      type: Date,
    },
    emotion: {
      type: String,
      required: true,
    },
    specificEmotion: {
      type: String,
      required: true,
    },
    reasonOfEmotion: {
      type: String,
      required: true,
    },
    elaborationText: {
      type: String,
      required: true,
    },
    stressTimeline: {
      type: String,
      required: true,
    },
  }],
  depressionTest: {
    type: Schema.Types.ObjectId,
    ref:'beckDepression',
    required: false,
  },
  anxietyTest: {
    type: Schema.Types.ObjectId,
    ref:'beckAnxiety',
    required: false,
  },
  depressionTestTime: {
    type: Date,
    required: false,
  },
  anxietyTestTime: {
    type: Date,
    required: false,
  },
  depressionTestEnabled: {
    type: Boolean,
    required: false,
  },
  anxietyTestEnabled: {
    type: Boolean,
    required: false,
  }
});

export const psychologicalProfile:Model<IPsychologicalProfile> = model<IPsychologicalProfile>("psychologicalProfile", psychologicalProfileSchema);
