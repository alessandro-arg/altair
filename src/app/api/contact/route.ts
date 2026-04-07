import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const values = contactSchema.parse(body);

    const port = Number(process.env.SMTP_PORT);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Altair Contact" <${process.env.SMTP_USER}>`,
      to: "altair@alessandro-argenziano.com",
      replyTo: values.email,
      subject: `[Altair] ${values.subject}`,
      text: `Name: ${values.name}
Email: ${values.email}
Subject: ${values.subject}

Message:
${values.message}`,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);

    const message =
      error instanceof Error ? error.message : "Failed to send email";

    return NextResponse.json({ message }, { status: 500 });
  }
}
