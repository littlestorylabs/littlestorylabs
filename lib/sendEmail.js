import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailWithAttachment(to, pdfBuffer, filename = 'hikaye.pdf') {
  try {
    const base64Pdf = pdfBuffer.toString('base64');

    const data = await resend.emails.send({
      from: 'Little Story Labs <noreply@littlestorylabs.com>',
      to,
      subject: 'Kişisel Hikaye Kitabın Hazır!',
      html: `
        <h2>Merhaba!</h2>
        <p>Kahramanı olduğun hikaye kitabı ektedir. İyi okumalar dileriz!</p>
        <p><strong>Little Story Labs</strong></p>
      `,
      attachments: [
        {
          filename,
          content: base64Pdf,
          type: 'application/pdf',
        },
      ],
    });

    console.log('E-posta gönderildi:', data);
  } catch (error) {
    console.error('E-posta gönderim hatası:', error);
    throw error;
  }
}
