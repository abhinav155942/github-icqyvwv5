import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is not set. Email functionality will be disabled.");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SendGrid API key not configured. Cannot send email.');
    return false;
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    });
    console.log(`Email sent successfully to ${params.to}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function generateConfirmationEmail(name: string, services: string[], totalCost: number): { subject: string; html: string; text: string } {
  const subject = "Your Request Has Been Received - AI Coach Growth Suite";
  
  const servicesList = services.map(service => `• ${service}`).join('\n');
  
  const text = `
Hello ${name},

Thank you for your interest in our AI Coach Growth Suite services!

We have successfully received your request for the following services:
${servicesList}

Total Investment: $${totalCost}

What happens next:
• Our team will review your requirements within 24-48 hours
• We'll prepare a customized proposal based on your specific needs
• You'll receive a detailed project timeline and next steps
• We'll schedule a consultation call to discuss implementation

We're excited to help grow your business with our AI-powered solutions!

If you have any immediate questions, feel free to reply to this email.

Best regards,
AI Coach Growth Suite Team
  `.trim();

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 28px;">AI Coach Growth Suite</h1>
        <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Your Request Has Been Received</p>
      </div>
      
      <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #1f2937; margin-top: 0;">Hello ${name},</h2>
        <p style="color: #4b5563; line-height: 1.6;">
          Thank you for your interest in our AI Coach Growth Suite services! We have successfully received your request.
        </p>
      </div>

      <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h3 style="color: #1f2937; margin-top: 0;">Selected Services:</h3>
        <ul style="color: #4b5563; line-height: 1.8;">
          ${services.map(service => `<li>${service}</li>`).join('')}
        </ul>
        <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 15px;">
          <strong style="color: #1f2937; font-size: 18px;">Total Investment: $${totalCost}</strong>
        </div>
      </div>

      <div style="background: #ecfdf5; border: 1px solid #d1fae5; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h3 style="color: #065f46; margin-top: 0;">What happens next:</h3>
        <ul style="color: #047857; line-height: 1.8;">
          <li>Our team will review your requirements within <strong>24-48 hours</strong></li>
          <li>We'll prepare a customized proposal based on your specific needs</li>
          <li>You'll receive a detailed project timeline and next steps</li>
          <li>We'll schedule a consultation call to discuss implementation</li>
        </ul>
      </div>

      <div style="text-align: center; padding: 20px; background: #f8fafc; border-radius: 8px;">
        <p style="color: #4b5563; margin: 0;">
          We're excited to help grow your business with our AI-powered solutions!<br>
          If you have any immediate questions, feel free to reply to this email.
        </p>
      </div>

      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px; margin: 0;">
          Best regards,<br>
          <strong>AI Coach Growth Suite Team</strong>
        </p>
      </div>
    </div>
  `;

  return { subject, html, text };
}