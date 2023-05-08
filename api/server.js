//node mailer with serverless function
import nodemailer from "nodemailer";
//dotenv for accessing environment variables
import { config } from "dotenv";
config();



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


async function sendEmail({ fullname, address, age, email, date, message }) {
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


  return transporter.sendMail(mailOptions);
}
export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body.formData);
    const emailRes = await sendEmail(req.body.formData);
    if (emailRes.messageId) {
      return res.status(200).json({ message: `Email sent successfuly` });
    }

    return res.status(400).json({ message: 'Error sending email' });
  }

  return res.status(400).json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}


