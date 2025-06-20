import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
   try {
      const { senderEmail, senderSubject, senderMessage } = await req.json();

      if (!senderEmail || !senderSubject || !senderMessage) {
         return new Response(JSON.stringify({ error: "All fields are required!" }), { status: 400 });
      }

      // Configure nodemailer
      const transporter = nodemailer.createTransport({
         service: "gmail", // You can use another SMTP service
         auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS, // App password (not your real password)
         },
      });

      const mailOptions = {
         from: process.env.EMAIL_USER, // Your actual email (to avoid spam flags)
         to: process.env.EMAIL_USER,   // Where you want to receive the email
         subject: `New Contact: ${senderSubject}`, // Customize the subject
         text: `
         You received a new message from your contact form:

         Sender Email: ${senderEmail}
         Subject: ${senderSubject}

         Message:
         ${senderMessage}
         `
      };
      // Send email
      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

   } catch (error) {
      console.error("Email sending error:", error);
      return NextResponse.json({ message: "Failed to send email!" }, { status: 500 });
   }
}