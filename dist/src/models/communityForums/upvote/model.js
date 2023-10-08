import { Schema, model, Types } from 'mongoose';
const upvoteSchema = new Schema({
    upvoteId: {
        type: Types.ObjectId
    },
    clientId: {
        type: Types.ObjectId,
        ref: 'client'
    },
    therapistId: {
        type: Types.ObjectId,
        ref: 'therapist'
    },
    postId: {
        type: Types.ObjectId,
        ref: 'post'
    },
    commentId: {
        type: Types.ObjectId,
        ref: 'comment'
    },
});
export const Upvote = model('upvote', upvoteSchema);
//# sourceMappingURL=model.js.map