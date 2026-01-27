import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* =========================
   SECURITY & MIDDLEWARE
========================= */

// Allow frontend domain only (update after deploy)
app.use(
  cors({
    origin: ["http://localhost:5173", "https://namegenx.com"],
    methods: ["POST", "GET"],
  })
);

app.use(express.json());

// Rate limiting (protect email spam)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // max 10 requests per IP
});

/* =========================
   HEALTH CHECK
========================= */
app.get("/", (req, res) => {
  res.status(200).send("NameGenX backend is running 🚀");
});

/* =========================
   CONTACT API
========================= */
app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are required",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"NameGenX Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: subject || "New Contact Message – NameGenX",
      html: `
        <div style="font-family:Arial,sans-serif;">
          <h2>📩 New Contact Message (NameGenX)</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <hr/>
          <p>${message}</p>
        </div>
      `,
    });

    res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send message",
    });
  }
});

/* =========================
   START SERVER
========================= */
app.listen(PORT, () => {
  console.log(`✅ NameGenX backend running on http://localhost:${PORT}`);
});
