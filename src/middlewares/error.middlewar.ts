import { Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, statusCode:number, message:string) => {
  res.status(statusCode).json({ status:"failure", message:message, err});
};