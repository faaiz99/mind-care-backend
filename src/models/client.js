const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
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
  dateofBirth: {
    type: Date,
    required: false,
  },
  createdAt: {
    type: Date,
  },
});

const client = mongoose.model("client", clientSchema);
module.exports = client;

//const hash = await bcrypt.hash(password, Number(bcryptSalt));
//const isValid = await bcrypt.compare(token, passwordResetToken.token);
