// server/routes/authRoute.ts
import express, { Response } from "express";
import { requireAuth, AuthenticatedRequest } from "../middleware/requireAuth"; // 👈 Import both

const router = express.Router();

// Auth controller imports
import { signUp } from "../controllers/auth/signUp";
import { signIn } from "../controllers/auth/signIn";
import { verifyEmail } from "../controllers/auth/verifyMail";
import { saveUser } from "../controllers/auth/saveUser";
import { forgetPassword } from "../controllers/auth/forgetPassword";
import { resetPassword } from "../controllers/auth/resetPassword";
import { newPassword } from "../controllers/auth/newPassword";

// Routes
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/verifyemail", verifyEmail);
router.post("/saveuser", saveUser);
router.post("/forgotpassword", forgetPassword);
router.post("/resetpassword", resetPassword);
router.post("/newpassword", newPassword);

router.get("/me", requireAuth, (req: AuthenticatedRequest, res: Response) => {
  res.status(200).json({
    message: "Welcome, authenticated user!",
    user: req.user, // ✅ No TS error now
  });
});

export default router;
