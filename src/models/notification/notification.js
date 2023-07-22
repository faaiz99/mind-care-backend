const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  notificationBody: {
    type: String,
  },
  notificationTitle: {
    type: String,
  },
  notificationTime: {
    type: String,
  },
  sentMedia: {},
});

const notificationModel = mongoose.model("notification", notificationSchema);
module.exports = notificationModel;
