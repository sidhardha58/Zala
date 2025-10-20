import { Request, Response } from "express";
import User from "../../models/userModel";
import { connectDB } from "../../dbConfig/dbConfig";
import { AuthenticatedRequest } from "../../middleware/requireAuth";

connectDB();

export const getProfile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await User.findById(userId).select(
      "username email profileImageURL bio immersiveStats createdAt"
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      success: true,
      profile: user,
    });
  } catch (error) {
    console.error("❌ Error in getProfile:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
