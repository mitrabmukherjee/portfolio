import nodemailer from "nodemailer";

// Support both SMTP_USER/SMTP_PASS and SMTP_EMAIL/SMTP_PASSWORD
function getSmtpAuth() {
  const user = process.env.SMTP_USER || process.env.SMTP_EMAIL;
  const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
  return { user, pass };
}

function createTransporter() {
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const { user, pass } = getSmtpAuth();

  if (!user || !pass) {
    throw new Error(
      "SMTP credentials missing. Set SMTP_USER and SMTP_PASS (or SMTP_EMAIL and SMTP_PASSWORD) in .env.local at the project root."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

/**
 * Send email to the person who submitted the form (confirmation).
 */
export function sendMail1(
  htmlContent: string,
  receiverEmail: string,
  subject: string = "Mail From Mitra Brinda Mukherjee"
): Promise<void> {
  const { user } = getSmtpAuth();
  if (!user) return Promise.reject(new Error("SMTP credentials missing."));

  const transporter = createTransporter();
  const mailOptions = {
    from: `"Mitra Brinda Mukherjee" <${user}>`,
    to: receiverEmail,
    subject,
    text: htmlContent.replace(/<[^>]*>/g, ""),
    html: htmlContent,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending confirmation email:", error);
        reject(error);
      } else {
        console.log("Confirmation email sent:", info.response);
        resolve();
      }
    });
  });
}

/**
 * Send notification email to you (admin) when someone submits the contact form.
 */
export function sendMail2(
  htmlContent: string,
  submitterEmail: string,
  subject: string = "New Contact Form Submission",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- kept for API compatibility
  submitterName: string = "Contact Form"
): Promise<void> {
  const { user } = getSmtpAuth();
  if (!user) return Promise.reject(new Error("SMTP credentials missing."));

  const transporter = createTransporter();
  const mailOptions = {
    from: `"Portfolio Contact" <${user}>`,
    to: user, // send to yourself so you receive the submission
    replyTo: submitterEmail,
    subject,
    text: htmlContent.replace(/<[^>]*>/g, ""),
    html: htmlContent,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending notification email:", error);
        reject(error);
      } else {
        console.log("Notification email sent to you:", info.response);
        resolve();
      }
    });
  });
}
