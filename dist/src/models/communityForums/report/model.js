import { Schema, model, Types } from 'mongoose';
const reportSchema = new Schema({
    commentId: {
        type: Types.ObjectId,
        ref: 'comment',
        required: true
    },
    postId: {
        type: Types.ObjectId,
        ref: 'post',
        required: true
    },
    clientId: {
        type: Types.ObjectId,
        ref: 'client',
        required: false
    },
    therapistId: {
        type: Types.ObjectId,
        ref: 'therapist',
        required: false
    },
    body: {
        type: String,
        required: true
    },
    action: [{
            type: String
        }]
});
export const Report = model("report", reportSchema);
//# sourceMappingURL=model.js.map