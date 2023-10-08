import { Router } from "express";
const router:Router = Router()

import { 
	createChat,
	// getUserChats,
	getCurrentChat,
	createMessage,
	getMessages,
	getClientChats,
 } from "../../../controllers/teletherapy.controller.js";


 // CHAT API
router.post('/create-chat', createChat)
router.get('/get-client-chat/:id', getClientChats) // clientid
router.get('/get-current-chat/:cid/:tid', getCurrentChat)


// MESSAGE API
router.post('/send-message', createMessage)
router.get('/get-messages/:id', getMessages)

export { router as teletherapyRoutes}