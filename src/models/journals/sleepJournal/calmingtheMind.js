const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calmingtheMindSchema = new Schema({
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

const calmingtheMind = mongoose.model("calmingtheMind", calmingtheMindSchema);
module.exports = calmingtheMind;
