import crypto from "crypto";
import { Therapist } from "../models/therapist/model.js";
import { issueTokens } from "../middlewares/auth/middleware.js";
import { emailSender, resetAccountPassword } from "../utils/sendmail.util.js";
import { ITherapist } from "../types/ITherapist.js";
import { FilterQuery } from "mongoose";

export const changePassword = async (email: string, password: string) => {
  const client = await Therapist.findOneAndUpdate(
    { email: email },
    { password: password },
  );
  if (!client) throw new Error("Account password cannot be changed");
  return client;
};
export const updateProfile = async (therapist: ITherapist) => {
  //A therapist profile already exists
  const response = await Therapist.findOneAndUpdate(
    { email: therapist.email },
    therapist,
    {
      returnOriginal: false,
    },
  );
  if (!response) throw new Error("Therapist Profile could not be updated");
  return response;
};
export const enterNewPassword = async (email: string, password: string) => {
  const response = await Therapist.findOneAndUpdate(
    { email: email },
    { password: password },
  );
  if (!response) throw new Error("Account Password could not be Changed");
  return response;
};
export const resetPassword = async (email: string) => {
  const response = await Therapist.findOne({
    email: email,
  });

  if (!response) throw new Error("Account does not exist");
  const token = crypto.randomBytes(32).toString("hex");
  const role = "therapist";
  resetAccountPassword(email, token, role);
  return response;
};
export const verifyAccount = async (email: string) => {
  const response = await Therapist.findOneAndUpdate(
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
export const sendVerificationEmail = async (email: string) => {
  const role = "therapist"; // static
  const token = crypto.randomBytes(32).toString("hex");
  emailSender(email, token, role);
};
export const login = async (email: string, password: string) => {
  // check existance by email
  const exists = await Therapist.exists({
    email: email,
  });
  // email exists
  //console.log('Email exists? ', exists)
  if (!exists) {
    throw new Error("Account does not exists");
  }

  // get therapist details if password is correct
  const client = await Therapist.findOne({
    email: email,
    password: password,
  });
  // delete client?.password
  // setting password to undefined for security purposes
  if (!client) throw new Error("Incorrect Password");

  return issueTokens(client);
};
export const signup = async (therapist: ITherapist) => {
  // check existance by email
  const exists = await Therapist.exists({
    email: therapist.email,
  });
  // email exists
  //console.log('Email exists? ', exists)
  if (exists) {
    throw new Error("Email already in database");
  }
  const response = await Therapist.create(therapist);
  if (!response) throw new Error("Account could not be created");

  return response;
};
export const renewTokens = async (therapist: ITherapist) => {
  return issueTokens(therapist);
};
export const aboutTherapist = async (id: string) => {
  const response = await Therapist.findOne({ _id: id });
  if (!response) throw new Error("Account could not be found");
  return response;
};

export const queryTherapist = async (query: unknown) => {
  if (typeof query === "object" && query !== null) {
    const response = await Therapist.find(query as FilterQuery<ITherapist>);
    if (!response) throw new Error("Therapist not found");
    return response;
  } else throw new Error("Invalid query: ", query as ErrorOptions);
};
