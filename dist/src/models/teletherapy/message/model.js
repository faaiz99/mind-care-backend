import { Schema, model } from 'mongoose';
const messageSchema = new Schema({
    chatId: String,
    senderId: String,
    content: String
}, {
    timestamps: true
});
export const Message = model("Message", messageSchema);
//# sourceMappingURL=model.js.map