import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/userModel";
import { connectDB } from "../../dbConfig/dbConfig";

connectDB();

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("🔐 Login request received:", req.body);

    const user = await User.findOne({ email });
    if (!user) {
      console.warn("❌ User not found:", email);
      return res.status(400).json({ error: "User does not exist" });
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      console.warn("❌ Invalid password for:", email);
      return res.status(400).json({ error: "Invalid Password" });
    }

    if (!user.isVerified) {
      console.warn("⚠️ Unverified user login attempt:", email);
      return res
        .status(400)
        .json({ error: "Please verify your email before logging in." });
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    // Set token cookie
    res.cookie("token", token, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day in ms
    });

    console.log("✅ Login successful for:", email);

    return res.status(200).json({
      message: "Login successful",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.error("🔥 Error during login:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
