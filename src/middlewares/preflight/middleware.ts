import { Request, Response, NextFunction } from "express";
export const preflight = (req:Request, res:Response, next:NextFunction) => {
	// Website you wish to allow to connect
	if(process.env.NODE_ENV === "production") {
	res.setHeader("Access-Control-Allow-Origin", "*");
	}
	// Request methods you wish to allow
	res.setHeader(
	  "Access-Control-Allow-Methods",
	  "GET, POST, DELETE",
	);
  
	// Request headers you wish to allow
	res.setHeader(
	  "Access-Control-Allow-Headers",
	  "X-Requested-With,content-type",
	);
  
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", "true");
  
	// Pass to next layer of middleware
	next();
  };