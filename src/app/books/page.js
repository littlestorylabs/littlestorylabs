import Image from "next/image";
import Hero from "@/components/Hero";

export default function BooksPage() {
  return (
    <>
      {/* HERO */}
      <Hero
        title="Kitaplar"
        subtitle="Mitoloji, tarih ve insan kaderi üzerine anlatılar."
        image="/images/hero/books.jpg"
      />

      <section className="max-w-5xl mx-auto py-16">

        {/* KİTAP KARTI */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* KAPAK */}
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/images/books/isigin-tapinagi.jpg"
              alt="Işığın Tapınağı"
              fill
              className="object-contain bg-black"
              priority
            />
          </div>

          {/* BİLGİ + LINKLER */}
          <div>

            <h2 className="text-3xl font-bold mb-2">
              Işığın Tapınağı
            </h2>

            <p className="text-lg opacity-70 mb-6">
              Babil’den Efes’e uzanan bir yolculuk
            </p>

            <p className="opacity-80 mb-10">
              Işığın Tapınağı, antik dünyanın gölgeleri arasında geçen;
              mitoloji, inanç ve insan kaderini merkeze alan bir romandır.
            </p>

            {/* LINKLER */}
            <div className="flex flex-col gap-4">

              <a
                href="https://books.google.com.tr/books?id=N0eyEQAAQBAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-white/30 rounded-lg px-6 py-4 hover:bg-white hover:text-black transition"
              >
                Google Books’ta Oku →
              </a>

              <a
                href="https://www.amazon.com/dp/B0GJ5FRLR4"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-white/30 rounded-lg px-6 py-4 hover:bg-white hover:text-black transition"
              >
                Amazon KDP’de Gör →
              </a>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
