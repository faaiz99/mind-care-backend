import { Schema, model } from 'mongoose';
const developingHealthyCopingMechanismSchema = new Schema({
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
export const developingHealthyCopingMechanism = model("developingHealthyCopingMechanism", developingHealthyCopingMechanismSchema);
//# sourceMappingURL=developingHealthyCopingMechanism.model.js.map