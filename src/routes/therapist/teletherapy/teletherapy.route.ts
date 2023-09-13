import { Router } from "express";
import { 
	sendMessage,
	getUserChat,
	getCurrentChat
 } from "../../../controllers/teletherapy.controller.ts";
const router:Router = Router()



router.get('/send-message', sendMessage)
router.post('/get-user-chat', getUserChat)
router.get('/get-current-chat', getCurrentChat)