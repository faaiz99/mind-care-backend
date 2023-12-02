import { Router } from "express";
const router: Router = Router();
import {
  getTherapistChats,
  getTherapistChat,
  saveChat,
} from "../../../controllers/teletherapy.controller.js";

router.get("/therapist-chats/:id", getTherapistChats);
router.get("/therapist-chat/:tid/:cid", getTherapistChat);
router.post("/save-chat", saveChat);

export { router as teletherapyRoutes };
