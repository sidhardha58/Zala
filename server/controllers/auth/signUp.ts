import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/userModel";
import { connectDB } from "../../dbConfig/dbConfig";

connectDB();

export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    console.log("🆕 Signup request received:", req.body);

    // Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User already exists with this email" });
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      isVerified: false, // You may want to handle email verification separately
    });

    // Generate JWT token
    const tokenData = {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    // Set token cookie
    res.cookie("token", token, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
    });

    console.log("✅ Signup successful for:", email);

    return res.status(201).json({
      message: "Signup successful",
      success: true,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error: any) {
    console.error("🔥 Error during signup:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
