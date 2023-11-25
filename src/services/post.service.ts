import { Post } from "../models/communityForums/post/model.js";
import { Upvote } from "../models/communityForums/upvote/model.js";
import { Downvote } from "../models/communityForums/downvote/model.js";
import { Report } from "../models/communityForums/report/model.js";
import { IPost } from "../types/IPost.js";
import { IUpvote } from "../types/IUpvote.js";
import { IDownvote } from "../types/IDownvote.js";
import { IReport } from "../types/IReport.js";
export const getTrendingPosts = async () => {};

export const getMostRecentPosts = () => {
  //TBD
};

export const getFeaturedPosts = () => {
  //TBD
};

export const createPost = async (post: IPost) => {
  const response = await Post.create(post);
  if (!response) throw new Error("Post Could not be Created");
  return response;
};

export const updatePost = async (post: IPost, id: string) => {
  const response = await Post.findOneAndUpdate({ _id: id }, post, {
    returnOriginal: false,
  });
  if (!response) throw new Error("Post Could not be Updated");
  return response;
};

export const deletePost = async (id: string) => {
  const response = await Post.findOneAndDelete({ _id: id });
  if (!response) throw new Error("Post Could not be Deleted");
  return response;
};

export const getPosts = async () => {
  /**
   * This is yet to be updated
   * with content reccomendation feed
   * however, this is basic implementation
   * of the getPosts because feed is populated by all posts
   */
  const response = await Post.find()
    .populate({
      path: "clientId",
      model: "client",
    })
    .populate({
      path: "therapistId",
      model: "therapist",
    })
    .populate({
      path: "upvotes",
      model: "upvote",
    })
    .populate({
      path: "downvotes",
      model: "downvote",
    })
    .populate({
      path: "postReport",
      model: "report",
    })
    .populate({
      path: "comments",
      model: "comment",
    })
    .populate({
      path: "comments",
      populate: {
        path: "replies",
        model: "comment",
        populate: {
          path: "therapistId",
          model: "therapist",
        },
      },
    })
    .populate({
      path: "comments",
      populate: {
        path: "replies",
        model: "comment",
        populate: {
          path: "clientId",
          model: "client",
        },
      },
    })
    .populate({
      path: "comments",
      populate: {
        path: "replies",
        model: "comment",
        populate: {
          path: "upvotes",
          model: "upvote",
        },
      },
    })
    .populate({
      path: "comments",
      populate: {
        path: "replies",
        model: "comment",
        populate: {
          path: "downvotes",
          model: "downvote",
        },
      },
    })
    .populate({
      path: "comments",
      populate: {
        path: "therapistId",
        model: "therapist",
      },
    })
    .populate({
      path: "comments",
      populate: {
        path: "clientId",
        model: "client",
      },
    });
  if (!response) throw new Error("Posts Could not be Found");
  return response;
};

export const getPost = async (id: string) => {
  const response = await Post.findOne({ _id: id }).populate({
    path: "comments",
    model: "comment",
  });
  if (!response) throw new Error("Post Could not be Found");
  return response;
};

export const upvotePost = async (upvote: IUpvote, id: string) => {
  const { therapistId, postId, clientId } = upvote;
  if (therapistId) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const existsInDownVote = await Downvote.findOneAndDelete({
      postId: postId,
      therapistId: therapistId,
    });
  } else if (clientId) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const existsInDownVote = await Downvote.findOneAndDelete({
      postId: postId,
      clientId: clientId,
    });
  }
  // When upvote
  const upvoteInDB = await Upvote.create(upvote);
  // CREATE A NEW UPVOTE WHEN IT DOES NOT EXISTS
  if (!upvoteInDB) throw new Error("Upvote Could not be Created");
  const response = await Post.findOneAndUpdate(
    { _id: id },
    {
      $push: { upvotes: upvoteInDB },
    },
  );
  if (!response) throw new Error("Post Could not be Upvoted");
  return response;
};

export const downvotePost = async (downvote: IDownvote, id: string) => {
  const { therapistId, postId, clientId } = downvote;
  // When upvote
  if (therapistId) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const existsInUpvoteVote = await Upvote.findOneAndDelete({
      postId: postId,
      therapistId: therapistId,
    });
  } else if (clientId) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const existsInUpvoteVote = await Upvote.findOneAndDelete({
      postId: postId,
      clientId: clientId,
    });
  }
  const downvoteInDB = await Downvote.create(downvote);
  if (!downvote) throw new Error("Downvote Could not be Created");
  const response = await Post.findOneAndUpdate(
    { _id: id },
    {
      $push: { downvotes: downvoteInDB },
    },
  );
  if (!response) throw new Error("Post Could not be Downvoted");
  return response;
};

export const removeUpvotePost = async (uid: string, pid: string) => {
  const response = await Post.findOneAndUpdate(
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

export const removeDownvotePost = async (did: string, pid: string) => {
  const response = await Post.findOneAndUpdate(
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

export const reportPost = async (reportPost: IReport, id: string) => {
  const report = await Report.create(reportPost);
  const response = await Post.findOneAndUpdate(
    { _id: id },
    {
      $push: { postReport: report },
    },
  );
  if (!response) throw new Error("Post could not be Reported");
  return response;
};
