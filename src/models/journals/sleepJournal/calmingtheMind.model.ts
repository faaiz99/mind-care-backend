import { Schema, model, Types } from 'mongoose'

const calmingtheMindSchema = new Schema({
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

export const CalmingTheMind = model("calmingtheMind", calmingtheMindSchema);
