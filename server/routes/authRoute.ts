import express from "express";
import multer from "multer";
import { requireAuth, AuthenticatedRequest } from "../middleware/requireAuth";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Auth controllers
import { signUp } from "../controllers/auth/signUp";
import { signIn } from "../controllers/auth/signIn";
import { verifyEmail } from "../controllers/auth/verifyMail";
import { saveUser } from "../controllers/auth/saveUser";
import { forgetPassword } from "../controllers/auth/forgetPassword";
import { resetPassword } from "../controllers/auth/resetPassword";
import { newPassword } from "../controllers/auth/newPassword";

// User controllers
import { getProfile } from "../controllers/user/getProfile";
import { updateBio } from "../controllers/user/updateBio";
import { uploadProfileImage } from "../controllers/user/uploadProfileImage";

// Auth routes
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/verifyemail", verifyEmail);
router.post("/saveuser", saveUser);
router.post("/forgotpassword", forgetPassword);
router.post("/resetpassword", resetPassword);
router.post("/newpassword", newPassword);

// ✅ Protected routes
router.get("/me", requireAuth, (req: AuthenticatedRequest, res) => {
  res.status(200).json({
    message: "Welcome, authenticated user!",
    user: req.user,
  });
});

// User profile routes
router.get("/user/profile", requireAuth, getProfile);
router.put("/user/updatebio", requireAuth, updateBio);

// Upload profile image
router.post(
  "/user/uploadProfileImage",
  requireAuth,
  upload.single("profileImage"),
  uploadProfileImage
);

export default router;
