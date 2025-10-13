import mongoose from "mongoose";

// Flag to prevent reconnecting if already connected
let isConnected = false;

export const connectDB = async (): Promise<void> => {
  if (isConnected) {
    console.log("✅ MongoDB already connected");
    return;
  }

  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("❌ MONGO_URI not defined in environment variables.");
  }

  try {
    await mongoose.connect(MONGO_URI);
    isConnected = true;

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
      process.exit(1);
    });
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1);
  }
};
