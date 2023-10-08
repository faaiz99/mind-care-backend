import { Schema, model } from 'mongoose';
const reminderSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'client'
    },
    type: {
        type: String,
    },
    time: {
        type: Date,
    },
    repeatDaily: {
        type: Boolean,
    },
    turnOn: {
        type: Boolean,
    }
});
export const Reminder = model("reminder", reminderSchema);
//# sourceMappingURL=model.js.map