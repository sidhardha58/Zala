import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

import authRoutes from "./routes/authRoute";
import feedbackRoutes from "./routes/feedbackRoute";

const app = express();

// ✅ Define all allowed origins (both local & deployed)
const allowedOrigins = [
  "http://localhost:5173", // Vite dev server
  "http://localhost:8080", // Local production preview
  process.env.DOMAIN, // Production frontend (from .env or Render)
].filter(Boolean); // remove undefined/null if DOMAIN isn't set

console.log("✅ Allowed CORS origins:", allowedOrigins);

// ✅ Configure CORS dynamically
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn("🚫 CORS blocked for origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Immerse API is running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
