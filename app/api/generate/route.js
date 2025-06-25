import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import { generatePdf } from "@/lib/generatePdf";
import { sendEmailWithAttachment } from "@/lib/sendEmail";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const body = await req.json();
  const { dil, ad, yas, cinsiyet, gozRengi, sacRengi, ozellikler, ilgiler, email, stil } = body;

  const messages = [
    {
      role: "system",
      content: `Sen çocuklara özel hikayeler yazan yaratıcı bir yazarsın.`,
    },
    {
      role: "user",
      content: `Aşağıdaki bilgilerle 7 paragraflık kısa bir çocuk hikayesi yaz. 
Hikaye macera dolu, olumlu, sade bir dille yazılsın ve her paragraf farklı bir sahne oluştursun. 
Dilin "${dil}" olacak.

Ad: ${ad}, Yaş: ${yas}, Cinsiyet: ${cinsiyet}, Göz Rengi: ${gozRengi}, Saç Rengi: ${sacRengi}, 
Kişisel Özellik: ${ozellikler}, İlgi Alanı: ${ilgiler}.`,
    },
  ];

  try {
    // 1. Hikayeyi oluştur
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    const fullStory = chatResponse.choices[0].message.content;
    const storyParts = fullStory.split(/\n{2,}/).filter(Boolean).slice(0, 7); // 7 sahne al

    // 2. Görselleri üret
    const images = [];
    for (let i = 0; i < storyParts.length; i++) {
      const prompt = `An illustration in ${stil} style for a children's story scene: "${storyParts[i]}"`;
      const imageResponse = await openai.images.generate({
        model: "dall-e-3",
        prompt,
        size: "1024x1024",
        n: 1,
      });
      images.push(imageResponse.data[0].url);
    }

    // 3. PDF üret
    const pdfBuffer = await generatePdf({
      storyParts,
      images,
      title: `${ad}'in Hikayesi`,
    });

    // 4. E-posta gönder (eğer e-posta girilmişse)
    if (email) {
      await sendEmailWithAttachment(email, pdfBuffer);
    }

    // 5. API yanıtı
    return NextResponse.json({
      success: true,
      message: "Hikaye oluşturuldu ve e-posta ile gönderildi.",
    });

  } catch (error) {
    console.error("Hata:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Bir hata oluştu" },
      { status: 500 }
    );
  }
}
