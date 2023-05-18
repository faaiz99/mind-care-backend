const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planningthedayAheadSchema = new Schema({
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

const planningthedayAhead = mongoose.model("planningthedayAhead", planningthedayAheadSchema);
module.exports = planningthedayAhead;
