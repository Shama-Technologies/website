export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { escapeHtml, mailConfig } from "../../../lib/mail";

// Emails the team each new waitlist sign-up from the hero form.
export async function POST(req: NextRequest) {
  let email = "";
  try {
    const body = await req.json();
    email = String(body?.email ?? "").trim();
  } catch {
    // Fall through to validation.
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ success: false, message: "Invalid email" }, { status: 400 });
  }

  const mail = mailConfig();
  if (!mail) {
    console.error("Email is not configured: set EMAIL_USER and EMAIL_APP_PASSWORD");
    return NextResponse.json({ success: false, message: "Failed to join" }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: mail.user, pass: mail.pass },
    });
    await transporter.sendMail({
      from: `"Shama Website" <${mail.from}>`,
      to: mail.to,
      replyTo: email,
      subject: "New waitlist sign-up",
      text: `${email} joined the Shama waitlist on ${new Date().toUTCString()}.`,
      html: `<p><b>${escapeHtml(email)}</b> joined the Shama waitlist on ${new Date().toUTCString()}.</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending waitlist email:", error);
    return NextResponse.json({ success: false, message: "Failed to join" }, { status: 500 });
  }
}
