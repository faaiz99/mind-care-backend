import {Request, Response, RequestHandler} from 'express'

export const createAppointment:RequestHandler = async (req:Request,res:Response)=>{
	res.send('hello appointment')
}

// export const getAppointment :RequestHandler = async (req:Request, res:Request)=>{

// }