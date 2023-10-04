import { Schema, model } from 'mongoose'

const sleepTrackerSchema = new Schema({
	clientId:{
		type:Schema.Types.ObjectId,
		ref:'client',
		required:false
	},
	
})

export const Sleep = model("sleepTracker", sleepTrackerSchema)