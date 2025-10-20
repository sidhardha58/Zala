import { Request, Response } from "express";
import User from "../../models/userModel";
import cloudinary from "../../utils/cloudinary";
import { AuthenticatedRequest } from "../../middleware/requireAuth";

export const uploadProfileImage = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const userId = req.user?.id;
    const file = req.file;

    if (!userId || !file) {
      return res.status(400).json({ message: "Missing required data" });
    }

    // Upload buffer to Cloudinary
    const uploadResult = await new Promise<{ secure_url: string }>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "immerse/profiles",
              resource_type: "image",
            },
            (error, result) => {
              if (error || !result) reject(error);
              else resolve(result as any);
            }
          )
          .end(file.buffer);
      }
    );

    // Update user profileImageURL
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.profileImageURL = uploadResult.secure_url;
    await user.save();

    return res.status(200).json({
      message: "Profile image updated",
      profileImageURL: user.profileImageURL,
    });
  } catch (err) {
    console.error("Image upload error:", err);
    return res.status(500).json({ message: "Image upload failed" });
  }
};
