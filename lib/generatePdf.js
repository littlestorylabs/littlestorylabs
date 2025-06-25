import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export async function generatePdf({ storyPages, imageBase64List, title }) {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Ön Kapak
  const coverPage = pdfDoc.addPage();
  coverPage.drawText(title || "Kahramanın Hikayesi", {
    x: 50,
    y: 700,
    size: 30,
    font,
    color: rgb(0, 0, 0),
  });

  // Hikaye Sayfaları
  for (let i = 0; i < storyPages.length; i++) {
    const page = pdfDoc.addPage();

    // Metin kısmı
    page.drawText(storyPages[i], {
      x: 50,
      y: 700,
      size: 12,
      font,
      color: rgb(0, 0, 0),
      maxWidth: 400,
      lineHeight: 16,
    });

    // Görsel kısmı (base64'ten ekleniyor)
    const imageBytes = Buffer.from(
      imageBase64List[i].replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );
    const image = await pdfDoc.embedJpg(imageBytes);
    page.drawImage(image, {
      x: 50,
      y: 350,
      width: 300,
      height: 300,
    });
  }

  // Arka Kapak
  const endPage = pdfDoc.addPage();
  endPage.drawText("Teşekkürler, hikayeni bizimle paylaştığın için!", {
    x: 50,
    y: 700,
    size: 16,
    font,
    color: rgb(0.2, 0.2, 0.2),
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
