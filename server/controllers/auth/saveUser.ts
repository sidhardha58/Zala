import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../../models/userModel";
import { connectDB } from "../../dbConfig/dbConfig";

connectDB();

export const saveUser = async (req: Request, res: Response) => {
  try {
    const { _id, username, email, profileImageURL } = req.body;
    const password = _id; // Used as password (likely from a provider like Google/Firebase)

    console.log("Received body:", req.body);

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        username,
        email,
        profileImageURL,
        password,
        isVerified: true,
      });
    }

    console.log("User saved:", user);

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    // Set token as HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).json({
      user,
      message: "Login successful",
      success: true,
    });
  } catch (error: any) {
    console.error("SaveUser Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
};
