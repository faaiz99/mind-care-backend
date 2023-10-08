import * as commentService from '../services/comment.service.js';
import { handleError } from '../middlewares/error/middleware.js';
export const createComment = async (req, res, next) => {
    try {
        const data = await commentService.createComment(req.params.id, req.body);
        res.status(200).json({ status: 'success', message: 'Comment created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const replyComment = async (req, res, next) => {
    try {
        const data = await commentService.replyComment(req.body, req.params.id);
        res.status(200).json({ status: 'success', message: 'Comment Replied', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateComment = async (req, res, next) => {
    try {
        const data = await commentService.updateComment(req.body, req.params.id);
        res.status(200).json({ status: 'success', message: 'Comment Updated', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteComment = async (req, res, next) => {
    try {
        const data = await commentService.deleteComment(req.params.id);
        res.status(200).json({ status: 'success', message: 'Comment Deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getComments = async (req, res, next) => {
    try {
        const data = await commentService.getComments(req.params.id);
        res.status(200).json({ status: 'success', message: 'Comments Retrieved', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const upvoteComment = async (req, res, next) => {
    try {
        const data = await commentService.upvoteComment(req.body, req.params.id);
        res.status(200).json({ status: 'success', message: 'Comment Upvoted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const downvoteComment = async (req, res, next) => {
    try {
        const data = await commentService.downvoteComment(req.body, req.params.id);
        res.status(200).json({ status: 'success', message: 'Comment Downvoted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const reportComment = async (req, res, next) => {
    try {
        const data = await commentService.reportComment(req.body, req.params.id);
        res.status(200).json({ status: 'success', message: 'Comment reported', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
//# sourceMappingURL=comment.controller.js.map