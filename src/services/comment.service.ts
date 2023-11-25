import { Comment } from "../models/communityForums/comment/model.js";
import { Upvote } from "../models/communityForums/upvote/model.js";
import { Downvote } from "../models/communityForums/downvote/model.js";
import { Report } from "../models/communityForums/report/model.js";
import { Post } from "../models/communityForums/post/model.js";
import { IComment } from "../types/IComment.js";
import { IReport } from "../types/IReport.js";

export const createComment = async (id: string, comment: IComment) => {
  const responseDB = await Comment.create(comment);
  const response = await Post.findOneAndUpdate(
    { _id: id },
    {
      $push: { comments: responseDB },
    },
  );
  if (!response && !responseDB)
    throw new Error("Comment Could not be Created", responseDB);
  return response;
};

export const replyComment = async (comment: IComment, id: string) => {
  const responseDB = await Comment.create(comment);
  const response = await Comment.findOneAndUpdate(
    { _id: id },
    {
      $push: { replies: responseDB },
    },
    {
      upsert: true,
      returnOriginal: false,
    },
  ).populate({
    model: "comment",
    path: "replies",
  });
  if (!response && !responseDB) throw new Error("Reply Could not be Created");
  return response;
};

export const updateComment = async (comment: IComment, id: string) => {
  const response = await Comment.findOneAndUpdate({ _id: id }, comment);
  if (!response) throw new Error("Comment Updated");
  return response;
};

export const deleteComment = async (id: string) => {
  const response = await Comment.findOneAndUpdate(
    { _id: id },
    {
      $set: { body: "Comment Deleted" },
    },
  );

  if (!response) {
    throw new Error("Comment Not Found");
  }

  return response;
};

export const getComments = async (id: string) => {
  const response = await Comment.find({ postId: id })
    .populate({
      model: "comment",
      path: "replies",
    })
    .populate({
      path: "therapistId",
      model: "therapist",
    })
    .populate({
      path: "clientId",
      model: "client",
    })
    .populate({
      path: "postId",
      model: "post",
    })
    .populate({
      path: "upvotes",
      model: "upvote",
    })
    .populate({
      path: "downvotes",
      model: "downvote",
    });
  if (!response) throw new Error("Comments Could not be Retrieved");
  return response;
};

export const upvoteComment = async (comment: IComment, id: string) => {
  const upvote = await Upvote.create(comment);
  const response = await Comment.findOneAndUpdate(
    { _id: id },
    {
      $push: { upvotes: upvote },
    },
  );
  if (!response) throw new Error("Comment Could not be Upvoted");
  return response;
};

export const downvoteComment = async (comment: IComment, id: string) => {
  const downvote = await Downvote.create(comment);
  const response = await Comment.findOneAndUpdate(
    { _id: id },
    {
      $push: { downvotes: downvote },
    },
  );
  if (!response) throw new Error("Comment Could not be Downvoted");
  return response;
};

export const reportComment = async (reportComment: IReport, id: string) => {
  const report = await Report.create(reportComment);
  const response = await Comment.findOneAndUpdate(
    { _id: id },
    {
      $push: { commentReport: report },
    },
  );
  if (!response) throw new Error("Comment Could not be Reported");
  return response;
};

export const removeUpvoteComment = async (uid: string, pid: string) => {
  const response = await Comment.findOneAndUpdate(
    { _id: pid },
    {
      $pull: {
        upvotes: uid,
      },
    },
    { new: true },
  );
  const removeUpvote = await Upvote.findOneAndDelete({ _id: uid });
  if (!response && !removeUpvote)
    throw new Error("Upvote Could not be Removed");
  return response;
};

export const removeDownvoteComment = async (did: string, pid: string) => {
  const response = await Comment.findOneAndUpdate(
    { _id: pid },
    {
      $pull: {
        downvotes: did,
      },
    },
    { new: true },
  );
  const removeDownvote = await Downvote.findOneAndDelete({ _id: did });
  if (!response && !removeDownvote)
    throw new Error("Downvote Could not be Removed");
  return response;
};
