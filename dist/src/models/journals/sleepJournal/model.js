// Discarded And Note Required Anymore
import { Schema, model, Types } from 'mongoose';
const sleepJournalSchema = new Schema({
    clientId: {
        type: Types.ObjectId,
        ref: 'client'
    },
    questions: {
        type: [String],
    },
    answers: {
        type: [String],
    }, createdAt: {
        type: Date
    }
});
export const SleepJournalModel = model("sleepJournal", sleepJournalSchema);
//# sourceMappingURL=model.js.map