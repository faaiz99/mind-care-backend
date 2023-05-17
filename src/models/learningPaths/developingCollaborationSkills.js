const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const developingCollaborationSkillsSchema = new Schema({
  questions: {
    type: String,
  },
  results: {
    type: String,
  },
  content: {
    type: String,
  },
  audio: {
    type: String,
  },
});

const developingCollaborationSkillsModel = mongoose.model(
  "developingCollaborationSkills",
  developingCollaborationSkillsSchema
);
module.exports = developingCollaborationSkillsModel;
