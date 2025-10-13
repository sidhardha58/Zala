import { Request, Response } from "express";
import { connectDB } from "../../dbConfig/dbConfig";
import User from "../../models/userModel";

connectDB();

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or Expired Token" });
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();

    return res.status(200).json({
      message: "Email Verified Successfully",
      success: true,
    });
  } catch (error: any) {
    console.error("Email verification error:", error);
    return res.status(500).json({
      error: error.message || "Server Error",
    });
  }
};
