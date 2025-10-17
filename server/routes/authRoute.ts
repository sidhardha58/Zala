import express from "express";

// Auth controller imports
import { signUp } from "../controllers/auth/signUp";
import { signIn } from "../controllers/auth/signIn";
import { verifyEmail } from "../controllers/auth/verifyMail";
import { saveUser } from "../controllers/auth/saveUser";
import { forgetPassword } from "../controllers/auth/forgetPassword";
import { resetPassword } from "../controllers/auth/resetPassword";
import { newPassword } from "../controllers/auth/newPassword";

const router = express.Router();

// Routes
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/verifyemail", verifyEmail);
router.post("/saveuser", saveUser);
router.post("/forgotpassword", forgetPassword);
router.post("/resetpassword", resetPassword);
router.post("/newpassword", newPassword);

export default router;
