const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calmingtheMindSchema = new Schema({
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

const CalmingtheMind = mongoose.model("calmingtheMind", calmingtheMindSchema);
module.exports = CalmingtheMind;
