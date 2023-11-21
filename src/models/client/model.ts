import { Schema, model, Model } from "mongoose";
import { IClient } from "../../types/IClient.js";
const clientSchema = new Schema<IClient>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  verifiedAccount: {
    type: Boolean,
    required: false,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  dateOfBirth: {
    type: Date,
    required: false,
  },
  createdAt: {
    type: Date,
    required: false,
  },
  reInstatement: {
    type: Number,
    required: false,
    default: 0,
  },
  violation: {
    type: String,
    required: false,
  },
  isBlocked: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export const Client: Model<IClient> = model<IClient>("client", clientSchema);

//const hash = await bcrypt.hash(password, Number(bcryptSalt));
//const isValid = await bcrypt.compare(token, passwordResetToken.token);
