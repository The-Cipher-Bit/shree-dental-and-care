import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import { config } from "dotenv";
config();
// middleware
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());



app.post("send", async (req, res) => {
  config();
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
    from: `"${fullname}" <${email}>`, // sender address
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

    try{
        const result = await transporter.sendMail(mailOptions);
        console.log('email sent');
        res.json({'status':'200','message':'email sent'})
    }catch(error){
        res.status(500).send(error.message);
    }

});
    

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  
//   transporter.verify((err, success) => {
//     err
//       ? console.log(err)
//       : console.log(`=== Server is ready to take messages: ${success} ===`);
//   });



    //curl -d -url http://localhost:3001/send