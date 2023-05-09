//node mailer with serverless function
import nodemailer from "nodemailer";
//dotenv for accessing environment variables
import { config } from "dotenv";
import path from "path";
const __dirname = path.resolve();
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


async function sendEmail({ fullname, address, age, email, date, message,phone }) {
   const mailOptions = {
     from: `"${fullname}" <${email}>`,
     to: process.env.EMAIL,
     subject: "New Appointment mail from shree dental website",
     html: `<html>
        <head>
          <style>
            /* Styles for the email body */
            body {
              background-color: #f5f5f5;
              font-family: Arial, sans-serif;
              color: #333333;
              padding: 20px;
            }
            .email-container {
              background-color: #ffffff;
              border-radius: 10px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              padding: 30px;
            }
            .email-header {
              color: #1c7cd6;
              font-size: 24px;
              margin-bottom: 20px;
            }
            .email-field {
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 10px;
            }
            .email-label {
              display: inline-block;
              width: 150px;
              font-weight: bold;
            }
            .email-message {
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 0;
            }
            .logo-container {
              text-align: center;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
          <div class="logo-container">

            <img src="cid:logo" alt="logo" />
          </div>
            <h1 class="email-header">New Appointment mail from ${fullname}</h1>
            <hr>
            <p class="email-field"><span class="email-label">Name:</span> ${fullname}</p>
            <p class="email-field"><span class="email-label">Address:</span> ${address}</p>
            <p class="email-field"><span class="email-label">Age:</span> ${age}</p>
            <p class="email-field"><span class="email-label">Client contact number:</span> ${phone}</p>
            <p class="email-field"><span class="email-label">Email Address:</span> ${email}</p>
            <p class="email-field"><span class="email-label">Choosen Date by client:</span> ${date}</p>
            <p class="email-field"><span class="email-label">Message:</span></p>
            <p class="email-message">${message}</p>
          </div>
        </body>
      </html>`,
     attachments: [
       {
         filename: "templogo.png",
         path: __dirname + "/src/assets/images/templogo.png",
         cid: "logo", //same cid value as in the html img src
       },
     ],
   };


  return transporter.sendMail(mailOptions);
}
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // console.log(req.body.formData);
    const emailRes = await sendEmail(req.body.formData);
    if (emailRes.messageId) {
      return res.status(200).json({ message: 'success' });
    }

    return res.status(400).json({ message: 'fail' });
  }

  return res.status(400).json({ message: `fail` });
}


