import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Mapping helper functions to make the email output beautiful and human-readable
const PIN_STYLES = {
  "hard-enamel": "Hard Enamel Pins",
  "soft-enamel": "Soft Enamel Pins",
  "die-struck": "Die Struck Pin Badges",
  "3d-cast": "3D Cast Pin Badges",
  "epoxy-pin": "Epoxy Pins",
  "custom-uv": "Custom UV Pins",
  "other": "Other Pins",
};

const METAL_FINISHES = {
  "gold": "Gold",
  "silver": "Silver",
  "copper": "Copper",
  "black-nickel": "Black Nickel",
  "black-metal": "Black Metal",
  "antique-gold": "Antique Gold",
  "antique-silver": "Antique Silver",
  "antique-copper": "Antique Copper",
};

const BACKING_OPTIONS = {
  "pvc": "PVC Backing",
  "metal-butterfly": "Metal Butterfly Backing",
  "magnet": "Magnet Backing",
  "safety-pin": "Safety Pin Backing",
};

const COLOR_OPTIONS = {
  "3-less": "3 Colors or less",
  "5-less": "5 Colors or less",
  "6-8": "6 to 8 Colors",
};

const DELIVERY_OPTIONS = {
  "standard": "Standard Delivery (20 to 30 Days)",
  "express": "Express Delivery (10 to 20 Days)",
};

function getMailConfig() {
  const host = process.env.MAIL_HOST || process.env.SMTP_HOST || "smtp.titan.email";
  const port = parseInt(process.env.MAIL_PORT || process.env.SMTP_PORT || "465", 10);
  const user = process.env.MAIL_USERNAME || process.env.SMTP_USER || "";
  const pass = process.env.MAIL_PASSWORD || process.env.SMTP_PASS || "";
  const encryption = (process.env.MAIL_ENCRYPTION || "").toLowerCase();
  const to = process.env.MAIL_TO || process.env.SMTP_TO || user || "info@printx.ae";
  const secure = encryption === "ssl" || encryption === "smtps" || port === 465;

  return { host, port, user, pass, to, secure };
}

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const data = await request.formData();

    // Retrieve form fields
    const fullName = data.get("fullName") || "N/A";
    const email = data.get("email") || "N/A";
    const phone = data.get("phone") || "N/A";
    const company = data.get("company") || "N/A";
    const pinStyleId = data.get("pinStyle");
    const metalFinishId = data.get("metalFinish");
    const unit = data.get("unit") || "Centimeter";
    const height = data.get("height") || "N/A";
    const width = data.get("width") || "N/A";
    const deliveryId = data.get("delivery");
    const quantity = data.get("quantity") || "N/A";
    const customQuantity = data.get("customQuantity");
    const backingTypeId = data.get("backingType");
    const colorAmountId = data.get("colorAmount");
    const designName = data.get("designName") || "N/A";
    const details = data.get("details") || "No additional details provided.";

    const designFile = data.get("designFile");

    // Resolve IDs to friendly names
    const resolvedStyle = PIN_STYLES[pinStyleId] || pinStyleId || "Not Selected";
    const resolvedFinish = METAL_FINISHES[metalFinishId] || metalFinishId || "Not Selected";
    const resolvedBacking = BACKING_OPTIONS[backingTypeId] || backingTypeId || "Not Selected";
    const resolvedColors = COLOR_OPTIONS[colorAmountId] || colorAmountId || "Not Selected";
    const resolvedDelivery = DELIVERY_OPTIONS[deliveryId] || deliveryId || "Not Selected";

    // Format quantity
    const finalQuantity = quantity === "custom" ? `${customQuantity} Pcs (Custom)` : `${quantity} Pcs`;

    const { host, port, user, pass, to, secure } = getMailConfig();

    if (!user || !pass || pass === "YOUR_EMAIL_PASSWORD_HERE") {
      console.warn("Mail credentials are not configured in environment variables.");
      return NextResponse.json(
        { error: "SMTP credentials not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const attachments = [];
    const logoPath = path.join(process.cwd(), "public", "pin-x.png");
    const logoCid = "printx-logo";
    const hasLogo = fs.existsSync(logoPath);

    if (hasLogo) {
      attachments.push({
        filename: "pin-x.png",
        content: fs.readFileSync(logoPath),
        cid: logoCid,
      });
    }

    if (designFile && typeof designFile === "object" && typeof designFile.arrayBuffer === "function") {
      const buffer = Buffer.from(await designFile.arrayBuffer());
      attachments.push({
        filename: designFile.name,
        content: buffer,
      });
    }

    const headerHtml = hasLogo
      ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="130" valign="middle" style="padding-right:20px;">
              <img src="cid:${logoCid}" alt="Print-X" width="120" style="display:block;max-width:120px;height:auto;" />
            </td>
            <td valign="middle" style="text-align:left;">
              <h1 style="margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px;color:#ffffff;">New Quote Request</h1>
              <p style="margin:6px 0 0;font-size:13px;color:#00AEEF;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Print-X Custom Pins Builder</p>
            </td>
          </tr>
        </table>`
      : `<h1>New Quote Request</h1><p>Print-X Custom Pins Builder</p>`;

    // Build premium, responsive HTML Email Body
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Quote Request</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            margin: 0;
            padding: 0;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(15, 99, 147, 0.08);
            border: 1px solid #e2e8f0;
          }
          .header {
            background-color: #0F6393;
            color: #ffffff;
            padding: 24px 28px;
            text-align: left;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          .header p {
            margin: 5px 0 0 0;
            font-size: 14px;
            color: #00AEEF;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .content {
            padding: 30px;
          }
          .section-title {
            font-size: 16px;
            font-weight: 700;
            color: #0F6393;
            border-bottom: 2px solid #f1f5f9;
            padding-bottom: 8px;
            margin-top: 25px;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .grid-row {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 10px;
          }
          .grid-label {
            flex: 0 0 40%;
            font-weight: 600;
            color: #64748b;
            font-size: 14px;
          }
          .grid-value {
            flex: 0 0 60%;
            color: #0f172a;
            font-size: 14px;
            font-weight: 700;
          }
          .message-box {
            background-color: #f8fafc;
            border-left: 4px solid #00AEEF;
            padding: 15px;
            border-radius: 4px;
            font-size: 14px;
            color: #334155;
            margin-top: 10px;
          }
          .footer {
            background-color: #f1f5f9;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #64748b;
            border-top: 1px solid #e2e8f0;
          }
          .footer a {
            color: #0F6393;
            text-decoration: none;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            ${headerHtml}
          </div>
          
          <div class="content">
            <!-- Contact Information -->
            <div class="section-title">Contact Details</div>
            
            <div class="grid-row">
              <div class="grid-label">Full Name:</div>
              <div class="grid-value">${fullName}</div>
            </div>
            <div class="grid-row">
              <div class="grid-label">Email Address:</div>
              <div class="grid-value">${email}</div>
            </div>
            <div class="grid-row">
              <div class="grid-label">Phone Number:</div>
              <div class="grid-value">${phone}</div>
            </div>
            <div class="grid-row">
              <div class="grid-label">Company Name:</div>
              <div class="grid-value">${company}</div>
            </div>

            <!-- Product Specifications -->
            <div class="section-title">Pin Specifications</div>
            
            <div class="grid-row">
              <div class="grid-label">Pin Style:</div>
              <div class="grid-value">${resolvedStyle}</div>
            </div>
            <div class="grid-row">
              <div class="grid-label">Metal Finish:</div>
              <div class="grid-value">${resolvedFinish}</div>
            </div>
            <div class="grid-row">
              <div class="grid-label">Dimensions:</div>
              <div class="grid-value">${height} x ${width} ${unit}s</div>
            </div>
            <div class="grid-row">
              <div class="grid-label">Backing Type:</div>
              <div class="grid-value">${resolvedBacking}</div>
            </div>
            <div class="grid-row">
              <div class="grid-label">Color Count:</div>
              <div class="grid-value">${resolvedColors}</div>
            </div>
            <div class="grid-row">
              <div class="grid-label">Quantity:</div>
              <div class="grid-value">${finalQuantity}</div>
            </div>

            <!-- Design & Delivery -->
            <div class="section-title">Design & Delivery</div>
            
            <div class="grid-row">
              <div class="grid-label">Design Name:</div>
              <div class="grid-value">${designName}</div>
            </div>
            <div class="grid-row">
              <div class="grid-label">Delivery Option:</div>
              <div class="grid-value">${resolvedDelivery}</div>
            </div>
            <div class="grid-row">
              <div class="grid-label">Attachment:</div>
              <div class="grid-value">${designFile ? `Yes (${designFile.name})` : "No file attached"}</div>
            </div>

            <!-- Additional Details -->
            <div class="section-title">Additional Requirements</div>
            <div class="message-box">
              ${details.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div class="footer">
            This quote request was submitted via <a href="https://printx.ae">Print-X Custom Pins Builder</a>.
          </div>
        </div>
      </body>
      </html>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"${fullName} (via Print-X)" <${user}>`,
      replyTo: email !== "N/A" ? email : undefined,
      to,
      subject: `[Quote Request] ${designName} - ${fullName}`,
      html: htmlContent,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending quote email:", error);

    let message = "Failed to send email. Please try again later.";
    if (process.env.NODE_ENV === "development" && error.code === "EAUTH") {
      message =
        "SMTP authentication failed. Verify MAIL_PASSWORD in .env.local, then in Titan webmail go to Settings → Enable Titan on other apps (and disable 2FA if it is on).";
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
