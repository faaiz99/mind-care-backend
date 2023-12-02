import { Teletherapy } from "../models/teletherapy/model.js";
import { ITeletherapy } from "../types/ITeletherapy.js";

export const saveChat = async (teletherapy: ITeletherapy) => {
  const response = await Teletherapy.findOneAndUpdate(
    {
      senderId: teletherapy.senderId,
      receiverId: teletherapy.receiverId,
    },
    {
      $set: { role: teletherapy.role },
      $push: { chat: { $each: teletherapy.chat } },
    },
    {
      new: true,
      upsert: true,
    },
  );
  if (!response) throw new Error("Could not save chat");
  return;
};

export const getClientChat = async (clientId: string, therapistId: string) => {
  const response = await Teletherapy.find({
    senderId: clientId,
    receiverId: therapistId,
    role: "client",
  })
    .populate({
      model: "therapist",
      path: "receiverId",
    })
    .populate({
      model: "client",
      path: "senderId",
    });
  if (!response) throw new Error("Client Chats Could not be Found");
  return response;
};

export const getTherapistChat = async (
  therapistId: string,
  clientId: string,
) => {
  const response = await Teletherapy.find({
    senderId: therapistId,
    receiverId: clientId,
    role: "therapist",
  })
    .populate({
      model: "client",
      path: "receiverId",
    })
    .populate({
      model: "therapist",
      path: "senderId",
    });
  if (!response) throw new Error("Therapist Chats Could not be Found");

  return response;
};

export const getClientChats = async (clientId: string) => {
  const response = await Teletherapy.find({
    senderId: clientId,
    role: "client",
  })
    .populate({
      model: "therapist",
      path: "receiverId",
    })
    .populate({
      model: "client",
      path: "senderId",
    });
  if (!response) throw new Error("Client Chats Could not be Found");
  return response;
};

export const getTherapistChats = async (therapistId: string) => {
  const response = await Teletherapy.find({
    senderId: therapistId,
    role: "therapist",
  })
    .populate({
      model: "client",
      path: "receiverId",
    })
    .populate({
      model: "therapist",
      path: "senderId",
    });
  if (!response) throw new Error("Therapist Chats Could not be Found");

  return response;
};
