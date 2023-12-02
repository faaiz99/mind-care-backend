import { Request, Response, NextFunction } from "express";
import { redisClient } from "../../configs/redis/config.js";
import { handleResponse } from "../response/middleware.js";

/**CLIENT */
export const cachedClientChat = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(
    `chat-${req.params.cid}-${req.params.tid}`,
  );
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT */
export const cachedClientChats = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(`chats-${req.params.id}`);
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT */
export const cachedSleepStats = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(`sleep-stats-${req.params.id}`);
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT */
export const cachedRescueSession = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(
    `rescue-sessions-${req.params.id}`,
  );
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT */
export const cachedReminders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(`reminders-${req.params.id}`);
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT */
export const cachedPsychologicalProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(
    `psychological-profile-${req.params.id}`,
  );
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT */
export const cachedJournals = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(`journals-${req.params.id}`);
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT-THERAPIST */
export const cachedPosts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get("posts");
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT-THERAPIST */
export const cachedComments = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(`comments-${req.params.id}`);
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT*/
export const cachedAppointmentsClient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(
    `appointments-client-${req.params.id}`,
  );
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT */
export const cachedTherapistChat = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(
    `chat-${req.params.tid}-${req.params.cid}`,
  );
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT */
export const cachedTherapistChats = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(`chats-${req.params.id}`);
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**THERAPIST*/
export const cachedAppointmentsTherapist = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get(
    `appointments-therapist-${req.params.id}`,
  );
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**CLIENT*/
export const cachedTherapists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get("therapists");
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**ADMIN*/
export const cachedReportedPosts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get("reported-posts");
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**ADMIN*/
export const cachedReportedAccounts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get("reported-dccounts");
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**ADMIN*/
export const cachedDashboardData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get("dashboard-data");
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
/**ADMIN*/
export const cachedReportedComments = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let isCached = false;
  const cachedResults = await redisClient.get("reported-comments");
  if (cachedResults) {
    isCached = true;
    handleResponse(res, 200, JSON.parse(cachedResults), isCached);
  } else {
    next();
  }
};
