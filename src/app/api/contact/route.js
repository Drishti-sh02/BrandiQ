import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Send inquiry to admin
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Note: This might be rejected by strict SMTP servers due to DMARC/SPF if you don't own the domain of the sender's email.
      replyTo: email,
      to: 'contact@brandeq.co.in',
      subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Subject: ${subject || 'N/A'}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // 2. Send confirmation to user
    await transporter.sendMail({
      from: `"BrandeQ" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting BrandeQ!`,
      text: `
Hi ${name},

Thank you for reaching out to us! We have received your message and will get back to you within 24 hours.

Your Message:
${message}

Best regards,
The BrandeQ Team
contact@brandeq.co.in
      `,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to us! We have received your message and will get back to you within 24 hours.</p>
        <p><strong>Your Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>Best regards,<br><strong>The BrandeQ Team</strong><br>contact@brandeq.co.in</p>
      `,
    });

    return Response.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
  }
}
