import { Router } from "express";
const router:Router = Router()
import { 
	createChat,
	getCurrentChat,
	createMessage,
	getMessages,
	getTherapistChats
 } from "../../../controllers/teletherapy.controller.ts";

/**
 * Chat API
 * -Used for creating connection between Client/Therapist
 * -Fetch Chat history
 * -Current Chat
 */
router.post('/create-chat', createChat)
router.get('/get-therapist-chat/:id', getTherapistChats) // therapistId
router.get('/get-current-chat/:cid/:tid', getCurrentChat)

/**
 * Message API
 * -Used for sending/recieving messages
 * -Gets Messages by chatId
 */
router.post('/send-message', createMessage)
router.get('/get-messages/:id', getMessages)

export { router as teletherapyRoutes}