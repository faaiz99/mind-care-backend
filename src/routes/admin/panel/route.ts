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

export { router as adminPanelRoutes };
