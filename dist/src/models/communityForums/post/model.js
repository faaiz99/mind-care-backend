import { Schema, model, Types } from 'mongoose';
const postSchema = new Schema({
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
    pictureLink: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: [{
            type: String,
            required: true
        }],
    comments: [{
            type: Types.ObjectId,
            ref: 'comment',
            required: false
        }],
    upvotes: [{
            type: Types.ObjectId,
            ref: 'upvote',
            required: false
        }],
    downvotes: [{
            type: Types.ObjectId,
            ref: 'downvote',
            required: false
        }],
    postReport: [{
            type: Types.ObjectId,
            ref: 'report'
        }],
    createdAt: {
        type: Date,
        default: Date.now()
    },
});
export const Post = model("post", postSchema);
//# sourceMappingURL=model.js.map