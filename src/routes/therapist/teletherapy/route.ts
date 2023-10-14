import { Router } from "express";
const router: Router = Router();
import {
  getCurrentChat,
  getMessages,
  getTherapistChats,
  getClientChats,
  // createMessage,
  // createChat,
} from "../../../controllers/teletherapy.controller.js";

/**
 * Chat API
 * -Used for creating connection between Client/Therapist
 * -Fetch Chat history
 * -Current Chat
 */
// router.post('/create-chat', createChat)

router.get("/client-chat/:id", getClientChats);
router.get("/therapist-chat/:id", getTherapistChats); // therapistId
router.get("/current-chat/:cid/:tid", getCurrentChat);

/**
 * Message API
 * -Used for sending/recieving messages
 * -Gets Messages by chatId
 */
// router.post('/send-message', createMessage)
router.get("/messages/:id", getMessages);

export { router as teletherapyRoutes };
