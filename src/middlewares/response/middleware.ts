import { Response } from "express";
// res from express
// status -> status code
// data from service
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleResponse = (
  res: Response,
  status: number,
  data: any,
  isCached: boolean = false,
) => {
  if (process.env.NODE_ENV === "production")
    res.status(status).json({ fromCache: isCached, data });
  else res.status(status).json({ fromCache: isCached, data });
};
