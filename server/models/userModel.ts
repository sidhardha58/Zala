import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    hashedEmail: String,

    // ✅ Profile
    profileImageURL: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },

    // ✅ Immersive Stats Grouped
    immersiveStats: {
      storiesCompleted: {
        type: Number,
        default: 0,
      },
      vrHours: {
        type: Number,
        default: 0,
      },
      favoriteGenre: {
        type: String,
        enum: [
          "Mythology",
          "Romance",
          "Sci-Fi",
          "Fantasy",
          "Adventure",
          "Other",
        ],
        default: "Other",
      },
      lastStory: {
        type: String,
        default: "",
      },
      currentStoryProgress: {
        type: Number, // percentage
        default: 0,
      },
      favoriteBook: {
        type: String,
        default: "",
      },
      achievementCount: {
        type: Number,
        default: 0,
      },
      vouchers: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
