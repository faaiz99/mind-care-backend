const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const findingpeacefulSpaceSchema = new Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: 'client'
  },
  questions: {
    type: Array,
  },
  answers: {
    type: Array,
  },
  date:{
    type:Date
  }
});

const FindingpeacefulSpace = mongoose.model("findingpeacefulSpace", findingpeacefulSpaceSchema);
module.exports = FindingpeacefulSpace;
