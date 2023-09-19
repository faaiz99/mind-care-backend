import { Router } from "express";
const router:Router = Router()
import { 
	createChat,
	// getUserChats,
	getCurrentChat,
	createMessage,
	getMessages,
	getTherapistChats
 } from "../../../controllers/teletherapy.controller.ts";


 // CHAT API
router.post('/create-chat', createChat)
router.get('/get-therapist-chat/:id', getTherapistChats) // pass any id -> client/therapist
router.get('/get-current-chat/:cid/:tid', getCurrentChat)


// MESSAGE API
router.post('/send-message', createMessage)
router.get('/get-messages/:id', getMessages)

export { router as teletherapyRoutes}