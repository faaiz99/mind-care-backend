import { Schema, model } from 'mongoose';
const acceptingWhatCantBeChangedSchema = new Schema({
    questions: {
        type: String,
    },
    results: {
        type: String,
    },
    content: {
        type: String,
    },
    audio: {
        type: String,
    },
});
export const acceptingWhatCantBeChanged = model("acceptingWhatCantBeChanged", acceptingWhatCantBeChangedSchema);
//# sourceMappingURL=developingHealthySleepHabits.model.js.map