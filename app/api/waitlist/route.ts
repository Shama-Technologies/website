export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { escapeHtml, mailConfig } from "../../../lib/mail";
import { appendToSheet } from "../../../lib/sheet";

// Records each waitlist sign-up from the hero form in the team sheet and
// emails the team. Succeeds if either goes through.
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

  const joined = () => NextResponse.json({ success: true });
  const failed = () =>
    NextResponse.json({ success: false, message: "Failed to join" }, { status: 500 });

  const saved = appendToSheet("Waitlist", { Email: email });

  const mail = mailConfig();
  if (!mail) {
    console.error("Email is not configured: set EMAIL_USER and EMAIL_APP_PASSWORD");
    return (await saved) ? joined() : failed();
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
    await saved;
    return joined();
  } catch (error) {
    console.error("Error sending waitlist email:", error);
    return (await saved) ? joined() : failed();
  }
}
