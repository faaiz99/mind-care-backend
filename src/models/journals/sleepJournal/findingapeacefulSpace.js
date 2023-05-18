const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const findingpeacefulSpaceSchema = new Schema({
  questions: {
    type: String,
  },
  answers: {
    type: String,
  },
  date:{
    type:Date
  }
});

const findingpeacefulSpace = mongoose.model("findingpeacefulSpace", findingpeacefulSpaceSchema);
module.exports = findingpeacefulSpace;
