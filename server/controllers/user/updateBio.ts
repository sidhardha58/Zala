import { Request, Response } from "express";
import User from "../../models/userModel";
import { AuthenticatedRequest } from "../../middleware/requireAuth";

// 🧠 Assumes req.user is populated by middleware (like requireAuth)
export const updateBio = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const { bio } = req.body;

    if (!userId || typeof bio !== "string") {
      return res.status(400).json({ message: "Invalid input" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.bio = bio;
    await user.save();

    return res.status(200).json({
      message: "Bio updated successfully",
      bio: user.bio,
    });
  } catch (error) {
    console.error("❌ Error updating bio:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
