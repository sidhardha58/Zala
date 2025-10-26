import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

import authRoutes from "./routes/authRoute";
import feedbackRoutes from "./routes/feedbackRoute";

const app = express();

// Use environment variable for frontend URL
const FRONTEND_URL = process.env.DOMAIN || "http://localhost:8080";
console.log("✅ CORS allowed for frontend:", FRONTEND_URL);

// Middleware
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
