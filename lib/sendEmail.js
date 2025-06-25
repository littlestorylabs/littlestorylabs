import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailWithAttachment({ to, subject, html, pdfBuffer }) {
  try {
    const data = await resend.emails.send({
      from: "Little Story Labs <noreply@littlestorylabs.com>",
      to,
      subject,
      html,
      attachments: [
        {
          filename: "hikaye.pdf",
          content: pdfBuffer,
        },
      ],
    });

    return { success: true, data };
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);
    return { success: false, error: error.message };
  }
}
