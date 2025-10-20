import { Request, Response } from "express";
import Feedback from "../../models/feedbackModel";
import sendEmail from "../../helpers/mailer"; // import your reusable sendEmail function

// POST: Save feedback and send email
export const submitFeedback = async (req: Request, res: Response) => {
  const { name, email, interest, message } = req.body;

  if (!name || !email || !interest || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // 1. Save feedback to DB
    const newFeedback = await Feedback.create({
      name,
      email,
      interest,
      message,
    });

    // 2. Prepare email HTML content for admin
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <br />
    `;

    // 3. Send email to admin using sendEmail helper
    await sendEmail({
      email: "bookscomealive.zala@gmail.com", // admin email
      emailType: "FEEDBACK",
      message: emailHtml,
      userEmail: email, // replyTo user email from contact form
    });

    return res
      .status(201)
      .json({ message: "Feedback submitted successfully." });
  } catch (err) {
    console.error("Error submitting feedback:", err);
    return res.status(500).json({ error: "Server error." });
  }
};

// GET: All feedbacks (for admin panel)
export const getAllFeedbacks = async (_req: Request, res: Response) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    return res.status(200).json({ feedbacks });
  } catch (err) {
    console.error("Error fetching feedbacks:", err);
    return res.status(500).json({ error: "Server error." });
  }
};
