import express from "express";
import {
  submitFeedback,
  getAllFeedbacks,
} from "../controllers/user/feedbackController";
import { requireAuth } from "../middleware/requireAuth";

const router = express.Router();

router.post("/", submitFeedback);

// Optional: protect this route if needed
router.get("/", requireAuth, getAllFeedbacks);

export default router;
