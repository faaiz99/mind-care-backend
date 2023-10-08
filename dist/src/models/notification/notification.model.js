import { model, Schema } from 'mongoose';
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
});
export const notificationModel = model("notification", notificationSchema);
//# sourceMappingURL=notification.model.js.map