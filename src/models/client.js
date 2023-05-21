const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  clientId :{
    type:mongoose.Types.ObjectId
  },
  firstName: {
    type: String,
    required: true,
    unique: false,
  },
  lastName: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  role: {
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

const clientModel = mongoose.model("client", clientSchema);
module.exports = clientModel;

//const hash = await bcrypt.hash(password, Number(bcryptSalt));
//const isValid = await bcrypt.compare(token, passwordResetToken.token);
