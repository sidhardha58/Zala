// server/middleware/requireAuth.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    username: string;
    email: string;
  };
}

export const requireAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Access Denied: No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
    req.user = decoded as AuthenticatedRequest["user"];

    next(); // Proceed
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Access Denied: Invalid or Expired Token" });
  }
};
