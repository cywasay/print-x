import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // Setup SMTP Transporter using Environment Variables
    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = parseInt(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER || "info@printx.ae";
    const pass = process.env.SMTP_PASS;
    const to = process.env.SMTP_TO || "info@printx.ae";

    if (!pass || pass === "YOUR_EMAIL_PASSWORD_HERE") {
      console.warn("SMTP email password is not configured in environment variables.");
      return NextResponse.json(
        { error: "SMTP credentials not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // Use SSL for port 465, TLS for 587
      auth: {
        user,
        pass,
      },
    });

    // Prepare attachment if a design file is submitted
    const attachments = [];
    if (designFile && typeof designFile === "object" && typeof designFile.arrayBuffer === "function") {
      const buffer = Buffer.from(await designFile.arrayBuffer());
      attachments.push({
        filename: designFile.name,
        content: buffer,
      });
    }

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
            padding: 30px;
            text-align: center;
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
            <h1>New Quote Request</h1>
            <p>Print-X Custom Pins Builder</p>
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
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
