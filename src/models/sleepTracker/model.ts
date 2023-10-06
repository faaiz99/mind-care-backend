import { Schema, model, Model } from 'mongoose'
import { ISleepTracker } from '../../types/ISleepTracker.js'

const sleepTrackerSchema = new Schema<ISleepTracker>({
	clientId:{
		type:Schema.Types.ObjectId,
		ref:'client',
		required:true,
	},
	sleepSchedule:[{
		logDate:{
			type:Date,
			required:true
		},
		sleepStartTime:{
			type:Date,
			required:true
		},
		sleepEndTime:{
			type:Date,
			required:true
		},
		timeInBed:{
			type:Number,
			required:true,
		},
		totalSleepTime:{
			type:Number,
			required:true,
		},
		timeAwake:{
			type:Number,
			required:true
		}
	}]
})

export const SleepTracker:Model<ISleepTracker> = model<ISleepTracker>("sleepTracker", sleepTrackerSchema)