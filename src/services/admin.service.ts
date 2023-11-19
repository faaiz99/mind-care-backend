/* eslint-disable @typescript-eslint/no-explicit-any */
import { Admin } from "../models/admin/model.js";
import { issueTokens } from "../middlewares/auth/middleware.js";
import { IToken } from "../types/ITokens.js";
import { IAdmin } from "../types/IAdmin.js";
import { Client } from "../models/client/model.js";
import { Therapist } from "../models/therapist/model.js";
import { Comment } from "../models/communityForums/comment/model.js";
import { Post } from "../models/communityForums/post/model.js";

interface IReportAccount {
  role: string;
  violation: string;
  isBlocked?: boolean;
}
export const groupClientsByAge = async () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const clients = await Client.aggregate([
    {
      $project: {
        age: {
          $subtract: [currentYear, { $year: "$dateOfBirth" }],
        },
      },
    },
    {
      $bucket: {
        groupBy: "$age",
        boundaries: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        default: "100+",
        output: {
          count: { $sum: 1 },
        },
      },
    },
  ]);

  return clients;
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
    );

    if (!response) throw new Error("Account could not be found");
    return response;
  }
};

export const handleReportAccount = async (
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
