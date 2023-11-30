import { Router } from "express";
const router: Router = Router();
import {
  getReportedAcccounts,
  getReportedComments,
  getReportedPosts,
  handleReportAccounts,
  handleBlockAccount,
  handleReportPosts,
  handleReportedComments,
  getDashboardData,
  getReportedPost,
  getReportedComment,
  getReportedAccount,
} from "../../../controllers/admin.controller.js";
import {
  cachedDashboardData,
  cachedReportedAccounts,
  cachedReportedPosts,
  cachedReportedComments,
} from "../../../middlewares/cached/cache.middleware.js";

// client or therapist id
// include role in the post body which will tell us which account to block
router.post("/report-account/:id", handleReportAccounts);
router.get("/get-dashboard-data", cachedDashboardData, getDashboardData);
router.post("/block-account/:id", handleBlockAccount);
router.post("/handle-report-posts/:id", handleReportPosts);
router.post(
  "/handle-reported-comments/:id",
  cachedReportedComments,
  handleReportedComments,
);
router.post("/handle-reported-accounts/:id", handleReportAccounts);
router.get("/get-reported-posts", cachedReportedPosts, getReportedPosts);
router.get("/get-reported-comments", getReportedComments);
router.get(
  "/get-reported-accounts",
  cachedReportedAccounts,
  getReportedAcccounts,
);
router.get("/get-reported-posts/:id", getReportedPost);
router.get("/get-reported-comments/:id", getReportedComment);
router.get("/get-reported-accounts.:id", getReportedAccount);

export { router as adminPanelRoutes };
