import { Router } from "express";
const router: Router = Router();
import {
  getClientChats,
  getClientChat,
  saveChat,
} from "../../../controllers/teletherapy.controller.js";

router.post("save-chat", saveChat);
router.get("/client-chats/:id", getClientChats);
router.get("/client-chat/:cid/:tid", getClientChat);

export { router as teletherapyRoutes };
