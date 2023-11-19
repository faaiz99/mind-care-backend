import { Router } from "express";
const router: Router = Router();
import { handleReportAccount, handleBlockAccount, getDashboardData} from "../../../controllers/admin.controller.js";

// client or therapist id
// include role in the post body which will tell us which account to block
router.post("/report-account/:id", handleReportAccount);
router.get("/get-dashboard-data", getDashboardData);
router.post("/block-account/:id", handleBlockAccount);

export { router as adminPanelRoutes };
