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

// client or therapist id
// include role in the post body which will tell us which account to block
router.post("/report-account/:id", handleReportAccounts);
router.get("/get-dashboard-data", getDashboardData);
router.post("/block-account/:id", handleBlockAccount);
router.post("/handle-report-posts/:id", handleReportPosts);
router.post("/handle-reported-comments/:id", handleReportedComments);
router.post("/handle-reported-accounts/:id", handleReportAccounts);
router.get("/get-reported-posts", getReportedPosts);
router.get("/get-reported-comments", getReportedComments);
router.get("/get-reported-accounts", getReportedAcccounts);
router.get("/get-reported-posts/:id", getReportedPost);
router.get("/get-reported-comments/:id", getReportedComment);
router.get("/get-reported-accounts.:id", getReportedAccount);

export { router as adminPanelRoutes };
