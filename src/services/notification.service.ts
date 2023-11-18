import { Notification } from "../models/notification/notification.model.js";

export const getNotificationsTherapist = async (id: string) => {
  const response = await Notification.find({ therapistId: id });
  if (!response) throw new Error(`Therapist notifications not found: ${id}`);
  return response;
};

export const getNotificationsClient = async (id: string) => {
  const response = await Notification.find({ clientId: id });
  if (!response) throw new Error(`Client notifications not found: ` + id);
  return response;
};

export const markAsReadNotificationById = async (id: string) => {
  const response = await Notification.findOneAndUpdate(
    { _id: id },
    {
      $set: { read: true },
    },
    {
      returnOriginal: false,
    },
  );
  if (!response) throw new Error(`Notification marked as Read: ${id}`);
  return response;
};

export const deleteNotificationById = async (id: string) => {
  const response = await Notification.findByIdAndDelete(id);
  if (!response) throw new Error(`Notification Deleted: ${id}`);
  return response;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createNotificationClient = async (
  notification: any,
  id: string,
) => {
  const response = await Notification.create({
    clientId: id,
    ...notification,
  });
  if (!response) throw new Error(`Notification Created: ${id}`);
  return response;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createNotificationTherapist = async (
  notification: any,
  id: string,
) => {
  const response = await Notification.create({
    therapistId: id,
    ...notification,
  });
  if (!response) throw new Error(`Notification Created: ${id}`);
  return response;
};
