import { Request, Response } from "express";
import { connectDB } from "../../dbConfig/dbConfig";
import User from "../../models/userModel";

export const verifyEmail = async (req: Request, res: Response) => {
  await connectDB();

  try {
    console.log("📥 Incoming verification request:");
    console.log("➡️  Request body:", req.body);

    const { token } = req.body;

    if (!token) {
      console.log("❌ No token provided in request body.");
      return res.status(400).json({ error: "Token is required." });
    }

    console.log("🔍 Looking for user with token:", token);

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      console.log(
        "❌ No matching user found with that token, or token expired."
      );
      return res.status(400).json({ error: "Invalid or Expired Token" });
    }

    console.log("✅ User found:", {
      email: user.email,
      isVerified: user.isVerified,
      tokenExpiry: user.verifyTokenExpiry,
    });

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();
    console.log("✅ User verification saved to DB.");

    return res.status(200).json({
      message: "Email Verified Successfully",
      success: true,
    });
  } catch (error: any) {
    console.error("❌ Email verification error:", error);
    return res.status(500).json({
      error: error.message || "Server Error",
    });
  }
};
