import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import { config } from "dotenv";
config();

// middleware
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const corsOptions = {
  origin: "https://shree-dental-and-care.vercel.app/",
  methods: ["GET", "POST"],
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

app.post("/send", async (req, res) => {
  const { fullname, address, age, email, date, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: `"${fullname}" <${email}>`,
    to: process.env.EMAIL,
    subject: "New Message from Contact Form",
    html: `<p>You have a new message from the contact form on your website.</p>
    <p><strong>Name: </strong> ${fullname}</p>
    <p><strong>Address: </strong> ${address}</p>
    <p><strong>Age: </strong> ${age}</p>
    <p><strong>Email Address: </strong> ${email}</p>
    <p><strong>Date: </strong> ${date}</p>
    <p><strong>Message: </strong> ${message}</p>`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent");
    res.json({ status: "success", message: "Email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

export default app;
