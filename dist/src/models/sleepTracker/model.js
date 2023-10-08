import { Schema, model } from 'mongoose';
const sleepTrackerSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'client',
        required: true,
    },
    sleepSchedule: [{
            logDate: {
                type: Date,
                required: true
            },
            sleepStartTime: {
                type: Date,
                required: true
            },
            sleepEndTime: {
                type: Date,
                required: true
            },
            timeInBed: {
                type: Number,
                required: true,
            },
            totalSleepTime: {
                type: Number,
                required: true,
            },
            timeAwake: {
                type: Number,
                required: true
            }
        }]
});
export const SleepTracker = model("sleepTracker", sleepTrackerSchema);
//# sourceMappingURL=model.js.map