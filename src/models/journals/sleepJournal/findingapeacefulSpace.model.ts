import { Schema, model, Types } from 'mongoose'

const findingpeacefulSpaceSchema = new Schema({
	clientId: {
		type: Types.ObjectId,
		ref: 'client'
	},
	questions: {
		type: [String],
	},
	answers: {
		type: [String],
	},
	createdAt: {
		type: Date
	}
});

export const FindingPeacefulSpace = model("findingpeacefulSpace", findingpeacefulSpaceSchema);
