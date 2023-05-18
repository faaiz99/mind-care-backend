const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planningthedayAheadSchema = new Schema({
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

const PlanningthedayAhead = mongoose.model("planningthedayAhead", planningthedayAheadSchema);
module.exports = PlanningthedayAhead;
