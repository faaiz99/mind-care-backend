import { Request, Response, NextFunction, RequestHandler } from 'express'

export const corsPolicy:RequestHandler = (req:Request, res:Response, next:NextFunction) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
}