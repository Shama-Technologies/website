export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { escapeHtml, mailConfig } from "../../../lib/mail";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const user_name = String(formData.user_name ?? "").trim();
    const user_email = String(formData.user_email ?? "").trim();
    const phone = String(formData.phone ?? "").trim();
    const message = String(formData.message ?? "").trim();

    // Validate required fields
    if (!user_name || !user_email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    const mail = mailConfig();
    if (!mail) {
      console.error("Email is not configured: set EMAIL_USER and EMAIL_APP_PASSWORD");
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: mail.user, pass: mail.pass },
    });

    // Format current date for the template
    const currentDate = new Date().toLocaleString();

    // Create HTML content with your template
    const htmlContent = `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Partnership Form Submission Details</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f5f7fa;
                margin: 0;
                padding: 0;
            }
            
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                padding: 30px;
                border-radius: 12px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            }
            
            .header {
                text-align: center;
                padding-bottom: 20px;
                margin-bottom: 25px;
                position: relative;
            }
            
            .header:after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 80px;
                height: 3px;
                background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
            }
            
            .header h1 {
                color: #2d3748;
                margin: 0;
                font-size: 26px;
                font-weight: 600;
            }
            
            .submission-date {
                text-align: right;
                font-size: 14px;
                color: #718096;
                margin-bottom: 25px;
            }
            
            .data-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
                padding: 25px;
                margin-bottom: 30px;
                border-top: 5px solid #4c51bf;
            }
            
            .card-title {
                font-size: 20px;
                font-weight: 600;
                color: #2d3748;
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 1px solid #edf2f7;
            }
            
            .data-item {
                margin-bottom: 15px;
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;
                border-bottom: 1px dashed #edf2f7;
            }
            
            .data-item:last-child {
                border-bottom: none;
            }
            
            .label {
                font-weight: 600;
                width: 120px;
                color: #4a5568;
            }
            
            .value {
                flex: 1;
                min-width: 200px;
                color: #2d3748;
            }
            
            .highlight-box {
                background: linear-gradient(135deg, #f6f9fe 0%, #edf2f7 100%);
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #4c51bf;
            }
            
            .highlight-title {
                font-weight: 600;
                color: #4c51bf;
                margin-bottom: 10px;
            }
            
            .message-box {
                background-color: #f9fafb;
                padding: 15px;
                border-radius: 8px;
                margin-top: 10px;
                font-style: italic;
                color: #4a5568;
            }
            
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #edf2f7;
                font-size: 14px;
                color: #718096;
            }
            
            .footer-logo {
                font-weight: bold;
                color: #4c51bf;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Partnership Form Submission</h1>
            </div>
            
            <div class="submission-date">
                Received on: ${currentDate}
            </div>
            
            <div class="highlight-box">
                <div class="highlight-title">Contact Details</div>
                <div class="data-item">
                    <div class="label">Name:</div>
                    <div class="value">${escapeHtml(user_name)}</div>
                </div>
                <div class="data-item">
                    <div class="label">Email:</div>
                    <div class="value">${escapeHtml(user_email)}</div>
                </div>
                <div class="data-item">
                    <div class="label">Phone:</div>
                    <div class="value">${escapeHtml(phone)}</div>
                </div>
            </div>
            
            <div class="data-card">
                <div class="card-title">Message</div>
                
                <div class="data-item">
                    <div class="value">
                        <div class="message-box">${escapeHtml(message)}</div>
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <p>This is an automated notification from your partnership form.</p>
                <p>&copy; 2025 <span class="footer-logo">Shama App</span> | All rights reserved</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Email options
    const mailOptions = {
      from: `"Shama App" <${mail.from}>`,
      to: mail.to,
      subject: "New Partnership Form Submission",
      html: htmlContent,
      // Optional: Send a copy to the user
      cc: user_email,
    };

    // Verify transporter connection
    await transporter.verify();

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
