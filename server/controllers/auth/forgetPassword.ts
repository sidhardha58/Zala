import { Request, Response } from "express";
import User from "../../models/userModel";
import sendEmail from "../../helpers/mailer";
import { connectDB } from "../../dbConfig/dbConfig";

// Ensure DB connection (if not already handled globally)
connectDB();

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    console.log(email);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await sendEmail({ email, emailType: "RESET", userId: user._id });

    return res.status(200).json({ message: "Email sent to reset password" });
  } catch (error: any) {
    console.error("Forget Password Error:", error);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};
