import { Request, Response, RequestHandler } from "express";
export const notFound: RequestHandler = async (req: Request, res: Response) => {
  res.status(404).json({
    message:
      "Ohh you are lost, read the API documentation to find your way back home :)",
  });
};
