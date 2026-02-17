import Hero from "@/components/Hero";

export default function ContactPage() {
  return (
    <>
      <Hero
        title="İletişim"
        subtitle="Little Story Labs ile iş birliği, yayıncılık ve proje iletişimi."
        image="/images/hero/contact.jpg"
      />

      <section className="max-w-4xl mx-auto py-16">

        {/* AÇIKLAMA */}
        <div className="text-center mb-16">
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Little Story Labs; hikâye üretimi, dijital karakterler,
            kitap projeleri ve deneysel oyunlar üzerine çalışan
            bağımsız bir yaratıcı stüdyodur.
          </p>
        </div>

        {/* İLETİŞİM KARTI */}
        <div className="border border-white/10 rounded-2xl p-10 text-center bg-white/5 backdrop-blur">

          <h2 className="text-2xl font-semibold mb-4">
            Kurumsal İletişim
          </h2>

          <p className="opacity-70 mb-8">
            Yayıncılık, iş birlikleri ve proje teklifleri için:
          </p>

          <a
            href="mailto:info@littlestorylabs.com"
            className="inline-block border border-white/30 rounded-xl px-10 py-4 text-lg hover:bg-white hover:text-black transition"
          >
            info@littlestorylabs.com
          </a>

        </div>

        {/* ALT BİLGİ */}
        <div className="text-center mt-12 opacity-60 text-sm">
          <p>
            Projeler hakkında tüm iş birlikleri için bizimle iletişime geçin.
          </p>
        </div>

      </section>
    </>
  );
}
