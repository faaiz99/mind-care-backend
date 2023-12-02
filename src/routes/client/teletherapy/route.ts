import { Router } from "express";
const router: Router = Router();
import {
  getClientChats,
  getClientChat,
  saveChat,
} from "../../../controllers/teletherapy.controller.js";
import {
  cachedClientChat,
  cachedClientChats,
} from "../../../middlewares/cached/cache.middleware.js";
router.post("save-chat", saveChat);
router.get("/client-chats/:id", cachedClientChats, getClientChats);
router.get("/client-chat/:cid/:tid", cachedClientChat, getClientChat);

export { router as teletherapyRoutes };
