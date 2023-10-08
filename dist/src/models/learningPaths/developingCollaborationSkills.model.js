import { Schema, model } from 'mongoose';
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
export const developingCollaborationSkills = model("developingCollaborationSkills", developingCollaborationSkillsSchema);
//# sourceMappingURL=developingCollaborationSkills.model.js.map