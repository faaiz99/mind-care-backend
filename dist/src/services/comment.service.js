/* eslint-disable @typescript-eslint/no-explicit-any */
import { Comment } from '../models/communityForums/comment/model.js';
import { Upvote } from '../models/communityForums/upvote/model.js';
import { Downvote } from '../models/communityForums/downvote/model.js';
import { Report } from '../models/communityForums/report/model.js';
import { Post } from '../models/communityForums/post/model.js';
export const createComment = async (id, comment) => {
    const responseDB = await Comment.create(comment);
    const response = await Post.findOneAndUpdate({ _id: id }, {
        $push: { comments: responseDB }
    });
    if (!response && !responseDB)
        throw new Error('Comment Could not be Created', responseDB);
    return response;
};
export const replyComment = async (comment, id) => {
    const responseDB = await Comment.create(comment);
    const response = await Comment.findOneAndUpdate({ _id: id }, {
        $push: { replies: responseDB }
    }, {
        upsert: true,
        returnOriginal: false
    }).populate({
        model: 'comment',
        path: 'replies'
    });
    if (!response && !responseDB)
        throw new Error('Reply Could not be Created');
    return response;
};
export const updateComment = async (comment, id) => {
    const response = await Comment.findOneAndUpdate({ _id: id }, comment);
    if (!response)
        throw new Error('Comment Updated');
    return response;
};
export const deleteComment = async (id) => {
    const response = await Comment.findOneAndUpdate({ _id: id }, {
        $set: { body: "Comment Deleted" }
    });
    if (!response) {
        throw new Error('Comment Not Found');
    }
    return response;
};
export const getComments = async (id) => {
    const response = await Comment.find({ postId: id }).populate({
        model: 'comment',
        path: 'replies'
    });
    if (!response)
        throw new Error('Comments Could not be Retrieved');
    return response;
};
export const upvoteComment = async (comment, id) => {
    const upvote = await Upvote.create(comment);
    const response = await Comment.findOneAndUpdate({ _id: id }, {
        $push: { upvotes: upvote }
    });
    if (!response)
        throw new Error('Comment Could not be Upvoted');
    return response;
};
export const downvoteComment = async (comment, id) => {
    const downvote = await Downvote.create(comment);
    const response = await Comment.findOneAndUpdate({ _id: id }, {
        $push: { downvotes: downvote }
    });
    if (!response)
        throw new Error('Comment Could not be Downvoted');
    return response;
};
export const reportComment = async (comment, id) => {
    const report = await Report.create(comment);
    const response = await Comment.findOneAndUpdate({ _id: id }, {
        $push: { commentReport: report }
    });
    if (!response)
        throw new Error('Comment Could not be Reported');
    return response;
};
//# sourceMappingURL=comment.service.js.map