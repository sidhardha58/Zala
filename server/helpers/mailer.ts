import nodemailer from "nodemailer";
import User from "../models/userModel";
import bcryptjs from "bcryptjs";

interface EmailOptions {
  email: string; // recipient email (admin or user)
  emailType: "VERIFY" | "RESET" | "FEEDBACK";
  userId?: string;
  message?: string; // only for FEEDBACK email
  userEmail?: string; // user's email (for replyTo in FEEDBACK)
}

export default async function sendEmail({
  email,
  emailType,
  userId,
  message,
  userEmail,
}: EmailOptions) {
  try {
    // For VERIFY or RESET emails, generate hashed tokens and update user
    let hashedToken = "";
    let hashedEmail = "";

    if (emailType === "VERIFY" || emailType === "RESET") {
      hashedToken = await bcryptjs.hash(userId!.toString(), 10);
      hashedEmail = await bcryptjs.hash(email, 10);

      hashedToken = hashedToken.replace(/[^a-zA-Z0-9]/g, "");
      hashedEmail = hashedEmail.replace(/[^a-zA-Z0-9]/g, "");

      if (emailType === "VERIFY") {
        await User.findByIdAndUpdate(userId, {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
          hashedEmail: hashedEmail,
        });
      } else if (emailType === "RESET") {
        await User.findByIdAndUpdate(userId, {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
          hashedEmail: hashedEmail,
        });
      }
    }

    const transport = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_API_KEY,
      },
    });

    let mailOptions;

    if (emailType === "FEEDBACK") {
      const userNameMatch = message?.match(
        /<strong>Name:<\/strong>\s?(.*?)<\/p>/
      );
      const userName = userNameMatch ? userNameMatch[1] : "A user";

      const interestMatch = message?.match(
        /<strong>Interest:<\/strong>\s?(.*?)<\/p>/
      );
      const userInterest = interestMatch ? interestMatch[1] : "General Inquiry";

      mailOptions = {
        from: "sidhardha.vsp@gmail.com",
        to: "bookscomealive.zala@gmail.com",
        replyTo: userEmail,
        subject: `📨 ${userName} sent a message – ${userInterest}`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>New Feedback Received</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f9fafb;
      margin: 0;
      padding: 20px;
      color: #1f2937;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
      border: 1px solid #e5e7eb;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(90deg, #0a0f1a, #1a2a40);
      color: #f9d47d;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
    }
    .content {
      padding: 20px 30px;
    }
    .content h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .content p {
      margin: 8px 0;
      line-height: 1.6;
    }
    .footer {
      background-color: #f3f4f6;
      padding: 15px 30px;
      text-align: center;
      font-size: 13px;
      color: #6b7280;
    }
    .footer a {
      color: #1a2a40;
      text-decoration: none;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>ZALA Feedback</h1>
    </div>
    <div class="content">
      <h2>You've received new feedback</h2>
      ${message}
      <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
    </div>
    <div class="footer">
      <p>Reply to this message: <a href="mailto:${userEmail}">${userEmail}</a></p>
      <p>© 2025 ZALA</p>
    </div>
  </div>
</body>
</html>
    `,
      };
    } else {
      // VERIFY or RESET email
      const verificationLink = `${process.env.DOMAIN}/auth/${
        emailType === "VERIFY" ? "verifyemail" : "resetpassword"
      }/?token=${encodeURIComponent(hashedToken)}&id=${encodeURIComponent(
        hashedEmail
      )}`;

      mailOptions = {
        from: "sidhardha.vsp@gmail.com",
        to: email,
        subject:
          emailType === "VERIFY"
            ? "Verify your ZALA account"
            : "Reset your ZALA password",
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${
          emailType === "VERIFY" ? "Email Verification" : "Password Reset"
        }</title>
<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8fafc;
    margin: 0; padding: 0; color: #1f2937;
  }
  .email-container {
    max-width: 600px; margin: 40px auto;
    background: #ffffff; border-radius: 10px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    overflow: hidden; border: 1px solid #e2e8f0;
  }
  .header {
    background: linear-gradient(90deg,#0a0f1a,#1a2a40);
    color: #f9d47d; text-align: center;
    padding: 30px 20px;
  }
  .header h1 { margin: 0; font-size: 26px; letter-spacing: 1px; }
  .content { padding: 30px 40px; }
  .content h2 { color: #1e293b; font-size: 20px; margin-bottom: 15px; }
  .content p { font-size: 15px; line-height: 1.6; color: #374151; margin-bottom: 20px; }
  .button-container { text-align: center; margin: 30px 0; }
  .button {
    background-color: #1a2a40; color: #ffffff !important;
    text-decoration: none; padding: 12px 30px; border-radius: 6px;
    font-size: 15px; font-weight: 600; display: inline-block;
  }
  .button:hover { background-color: #253b5a; }
  .link { color: #1a2a40; word-break: break-word; text-decoration: none; font-weight: 500; }
  .footer {
    background-color: #1a2a40; color: #f9d47d;
    text-align: center; padding: 18px; font-size: 13px;
  }
  .footer a { color: #f9d47d; text-decoration: underline; }
</style>
</head>
<body>
  <div class="email-container">
    <div class="header"><h1>ZALA</h1></div>
    <div class="content">
      <h2>${
        emailType === "VERIFY"
          ? "Confirm your email address"
          : "Password reset request"
      }</h2>
      <p>Hello,</p>
      <p>${
        emailType === "VERIFY"
          ? "Thank you for joining ZALA — the world’s first immersive storytelling platform. Please confirm your email to activate your account."
          : "We received a request to reset your password for your ZALA account. Click below to continue."
      }</p>
      <div class="button-container">
        <a href="${verificationLink}" class="button" target="_blank">
          ${emailType === "VERIFY" ? "Verify Email" : "Reset Password"}
        </a>
      </div>
      <p>If the button above doesn’t work, copy and paste this link into your browser:</p>
      <p><a href="${verificationLink}" class="link" target="_blank">${verificationLink}</a></p>
    </div>
    <div class="footer">
      <p>© 2025 ZALA. All rights reserved.</p>
      <p><a href="https://zala.com" target="_blank">Visit ZALA</a> | Contact: bookscomealive.zala@gmail.com</p>
    </div>
  </div>
</body>
</html>
`,
      };
    }

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
