import { Router } from "express";
const router: Router = Router();
import {
  getTherapistChats,
  getTherapistChat,
  saveChat,
} from "../../../controllers/teletherapy.controller.js";
import {
  cachedTherapistChat,
  cachedTherapistChats,
} from "../../../middlewares/cached/cache.middleware.js";

router.post("/save-chat", saveChat);
router.get("/therapist-chats/:id", cachedTherapistChats, getTherapistChats);
router.get("/therapist-chat/:tid/:cid", cachedTherapistChat, getTherapistChat);

export { router as teletherapyRoutes };
