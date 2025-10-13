import { Request, Response } from "express";
import User from "../../models/userModel";
import { connectDB } from "../../dbConfig/dbConfig";

connectDB();

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: "Token is required" });
    }

    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or Expired Token" });
    }

    // Clear the token and expiry fields
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;

    await user.save();

    return res.status(200).json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error: any) {
    console.error("Reset Password Error:", error);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};
