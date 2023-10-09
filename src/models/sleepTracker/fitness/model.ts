import { Schema, model, Model } from 'mongoose'

const fitnessSchema = new Schema({
	clientId: {
		type: Schema.Types.ObjectId,
		ref: 'client'
	},
	height: {
		type: Number,
		required: true
	},
	weight: {
		type: Number,
		required: true
	},
	steps: {
		type: Number,
		required: false
	},
	distanceTravalled: {
		type: Number,
		required: false
	},
	logDate: {
		type: Date,
		required: true
	},
	bmi :{
		type:Number,
		required:false
	}
})
export const Fitness = model('fitness', fitnessSchema)