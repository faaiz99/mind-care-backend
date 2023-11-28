/* eslint-disable @typescript-eslint/no-explicit-any */
import { Admin } from "../models/admin/model.js";
import { issueTokens } from "../middlewares/auth/middleware.js";
import { IToken } from "../types/ITokens.js";
import { IAdmin } from "../types/IAdmin.js";
import { Client } from "../models/client/model.js";
import { Therapist } from "../models/therapist/model.js";
import { Comment } from "../models/communityForums/comment/model.js";
import { Post } from "../models/communityForums/post/model.js";
import { IReportAccount } from "../types/IReportAccount.js";
import { Report } from "../models/communityForums/report/model.js";

export const getReportedAcccount = async (id: string) => {
  const response = await Client.findOne({ _id: id, reInstatement: 1 });
  if (!response) throw new Error("No reported account found");
  return response;
};

export const getReportedComment = async (id: string) => {
  const response = await Comment.findOne({
    _id: id,
    commentReport: { $exists: true, $not: { $size: 0 } },
  });
  if (!response) throw new Error("No reported comment found");
  return response;
};

export const getReportedPost = async (id: string) => {
  const response = await Post.findOne({
    _id: id,
    postReport: { $exists: true, $not: { $size: 0 } },
  });
  if (!response) throw new Error("No reported post found");
  return response;
};

export const getReportedAcccounts = async () => {
  const clientAccounts = await Client.find({ reInstatement: 1 });
  const therapistAccount = await Therapist.find({ reInstatement: 1 });
  const response = {
    clientAccounts,
    therapistAccount,
  };
  if (!response) throw new Error("No reported accounts found");
  return response;
};

export const getReportedComments = async () => {
  const response = await Report.find({})
    .populate({
      path: "commentId",
      model: "comment",
    })
    .populate({
      path: "clientId",
      model: "client",
    })
    .populate({
      path: "therapistId",
      model: "therapist",
    })
    .exec();
  if (!response) throw new Error("No reported comments found");
  return response;
};

export const getReportedPosts = async () => {
  const response = await Report.find({})
    .populate({
      path: "postId",
      model: "post",
    })
    .populate({
      path: "clientId",
      model: "client",
    })
    .populate({
      path: "therapistId",
      model: "therapist",
    })
    .exec();
  if (!response) throw new Error("No reported posts found");
  return response;
};

export const handleReportedComments = async (action: string, id: string) => {
  if (action === "delete") {
    const response = await Comment.updateOne(
      { _id: id, commentReport: { $exists: true, $not: { $size: 0 } } },
      { $set: { body: "removed by admin" } },
    );
    if (!response) throw new Error("Comment could not be found");
    return response;
  } else if (action === "ignore") {
    const response = await Comment.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          commentReport: [],
        },
      },
    );
    if (!response) throw new Error("Comment could not be found");
    return response;
  }
};

export const handleReportPosts = async (action: string, id: string) => {
  if (action === "delete") {
    const response = await Post.updateOne(
      { _id: id, postReport: { $exists: true, $not: { $size: 0 } } },
      { $set: { body: "removed by admin" } },
      { new: true },
    );
    if (!response) throw new Error("Post could not be found");
    return response;
  } else if (action === "ignore") {
    const response = await Post.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          postReport: [],
        },
      },
      { new: true },
    );
    if (!response) throw new Error("Post could not be found");
    return response;
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handleReportedAccounts = async (action: string, id: string) => {
  const response = "Handle Report Accounts Triggered";
  if (!response) throw new Error("Error");
  return response;
};

export const getDashboardData = async () => {
  try {
    const noOfClients = await Client.countDocuments();
    const noOfTherapists = await Therapist.countDocuments();
    const totalUsers = noOfClients + noOfTherapists;
    const therapistAccountReported = await Therapist.countDocuments({
      reInstatement: 1,
    });
    const clientAccountReported = await Client.countDocuments({
      reInstatement: 1,
    });
    const commentsReported = await Comment.countDocuments({
      commentReport: { $exists: true, $not: { $size: 0 } },
    });
    const postsReported = await Post.countDocuments({
      postReport: { $exists: true, $not: { $size: 0 } },
    });

    const response = {
      noOfClients,
      noOfTherapists,
      totalUsers,
      therapistAccountReported,
      clientAccountReported,
      commentsReported,
      postsReported,
    };

    if (!response) throw new Error("Dashboard Data could not be found");
    return response;
  } catch (error: any) {
    throw new Error(`An error occurred: ${error.message}`);
  }
};

export const viewBlockedClientAccounts = async () => {
  const response = await Client.find({ isBlocked: true });
  if (!response) throw new Error("No blocked accounts found");
  return response;
};

export const viewBlockedTherapistAccounts = async () => {
  const response = await Therapist.find({ isBlocked: true });
  if (!response) throw new Error("No blocked accounts found");
  return response;
};

export const handleBlockAccount = async (
  reportAccount: IReportAccount,
  id: string,
) => {
  if (reportAccount.role === "client") {
    const { isBlocked } = reportAccount;
    const response = await Client.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          isBlocked: isBlocked,
        },
      },
      { new: true },
    );
    if (!response) throw new Error("Account could not be found");
    return response;
  } else if (reportAccount.role === "therapist") {
    const { isBlocked } = reportAccount;
    const response = await Therapist.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          isBlocked: isBlocked,
        },
      },
      { new: true },
    );

    if (!response) throw new Error("Account could not be found");
    return response;
  }
};

/**
 *
 * Used to report the account depending on the role of the user
 */
export const handleReportAccounts = async (
  reportAccount: IReportAccount,
  id: string,
) => {
  if (reportAccount.role === "client") {
    const { violation } = reportAccount;
    const response = await Client.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          reInstatement: 1,
          violation: violation,
        },
      },
    );
    if (!response) throw new Error("Account could not be found");
    return response;
  } else if (reportAccount.role === "therapist") {
    const { violation } = reportAccount;
    const response = await Therapist.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          reInstatement: 1,
          violation: violation,
        },
      },
    );

    if (!response) throw new Error("Account could not be found");
    return response;
  }
};

export const login = async (
  email: string,
  password: string,
): Promise<IToken> => {
  const admin = await Admin.findOne({
    email: email,
    password: password,
  });
  if (!admin) {
    throw new Error("Account does not exist");
  }
  return issueTokens(admin);
};

export const signup = async (admin: IAdmin) => {
  const response = await Admin.create(admin);
  if (!response) throw new Error("Account could not be created");
  return response;
};

export const renewTokens = async (admin: IAdmin): Promise<IToken> => {
  return issueTokens(admin);
};

export const aboutAdmin = async (id: string) => {
  const response = await Admin.findOne({ _id: id });
  if (!response) throw new Error("Account could not be found");
  return response;
};
