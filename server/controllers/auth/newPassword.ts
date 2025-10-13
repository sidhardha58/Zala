import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import User from "../../models/userModel";
import { connectDB } from "../../dbConfig/dbConfig";
connectDB();

export const newPassword = async (req: Request, res: Response) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({ error: "Email or password is missing" });
    }

    console.log("Request Body:", req.body);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid email" });
    }

    console.log("User found:", user);

    const salt = await bcryptjs.genSalt(10);
    const hashedNewPassword = await bcryptjs.hash(newPassword, salt);

    user.password = hashedNewPassword;
    await user.save();

    return res
      .status(200)
      .json({ message: "Password reset successful", success: true });
  } catch (error: any) {
    console.error("Error resetting password:", error);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};
