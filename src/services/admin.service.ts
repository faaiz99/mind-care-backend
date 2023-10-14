import { Admin } from "../models/admin/model.js";
import { issueTokens } from "../middlewares/auth/middleware.js";
import { IToken } from "../types/ITokens.js";
import { IAdmin } from "../types/IAdmin.js";

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
