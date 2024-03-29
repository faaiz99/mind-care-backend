import { Client } from "../models/client/model.js";
import { issueTokens } from "../middlewares/auth/middleware.js";
import { emailSender, resetAccountPassword } from "../utils/sendmail.util.js";
import { IToken } from "../types/ITokens.js";
import { IClient } from "../types/IClient.js";
import crypto from "crypto";

export const enternewPassword = async (email: string, password: string) => {
  // Can also be used to change password from profile
  const response = await Client.findOneAndUpdate(
    { email: email },
    { password: password },
  );
  if (!response) throw new Error("Account not found");
  return response;
};

export const resetPassword = async (email: string) => {
  const client = await Client.findOne({
    email: email,
  });
  if (!client) throw new Error("Account not found");
  const token = crypto.randomBytes(32).toString("hex");
  const role = "client";
  resetAccountPassword(email, token, role);
  return client;
};

export const verifyAccount = async (email: string) => {
  const response = await Client.findOneAndUpdate(
    {
      email: email,
    },
    {
      verifiedAccount: true,
    },
    {
      new: true,
    },
  );

  if (!response) throw new Error("Account could not be verified");
  return response;
};

export const sendverificationEmail = async (email: string): Promise<void> => {
  const role = "client"; // static
  const token = crypto.randomBytes(32).toString("hex");
  emailSender(email, token, role);
};

export const login = async (
  email: string,
  password: string,
): Promise<IToken> => {
  // check existance by email
  const exists = await Client.exists({
    email: email,
  });
  // email exists
  //console.log('Email exists? ', exists)
  if (!exists) {
    throw new Error("Account does not exists");
  }

  // get therapist details if password is correct
  const client = await Client.findOne({
    email: email,
    password: password,
  });
  // delete client?.password
  // setting password to undefined for security purposes
  if (!client) throw new Error("Incorrect Password");

  return issueTokens(client);
};

export const signup = async (client: IClient) => {
  // check existance by email
  const exists = await Client.exists({
    email: client.email,
  });
  // email exists
  //console.log('Email exists? ', exists)
  if (exists != null || exists != undefined) {
    throw new Error("email already in database");
  }

  const response = await Client.create(client);
  if (!response) throw new Error("account could not be created");

  return response;
};

export const renewTokens = async (client: IClient): Promise<IToken> => {
  return issueTokens(client);
};

export const aboutClient = async (id: string) => {
  const response = await Client.findOne({ _id: id });
  if (response == null || response == undefined)
    throw new Error("Account could not be found");
  return response;
};
