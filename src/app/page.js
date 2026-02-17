import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO IMAGE */}
      <Hero
        title="Little Story Labs"
        subtitle="Müzik yapan, hikâyeler üreten, dijital kitaplar yayınlayan, oyunlar ve dijital karakterler üreten bağımsız bir yaratıcı stüdyo."
        image="/images/hero/home.jpg"
      />

      {/* LALIN SPOTLIGHT */}
      <section className="max-w-6xl mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* FOTO */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/artists/lalin.jpg"
              alt="Lalin Arma"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* METİN */}
          <div>
            <p className="text-sm uppercase tracking-widest opacity-60 mb-3">
              
            </p>

            <h2 className="text-5xl font-bold mb-4">
              Lalin
            </h2>

            <p className="text-lg opacity-80 mb-8">
              Duyguyu merkeze alan güçlü bir ses.
              Hikâyelerden doğan bir müzik dünyası.
            </p>

            <div className="flex gap-4">
              <Link
                href="/artists/lalin"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                Lalin’i Keşfet →
              </Link>

              <Link
                href="/contact"
                className="border border-white/30 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                İş Birliği
              </Link>
            </div>

            <p className="mt-8 text-sm opacity-60">
              23 Şubat tüm platformlarda. Takipte kalın.
            </p>
          </div>

        </div>
      </section>

      {/* ANA İÇERİK */}
      <section className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10">

          {/* STUDIO */}
          <div className="border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">Stüdyomuz</h2>
            <p className="mb-4 opacity-80">
              Little Story Labs’in vizyonu ve yaratıcı dünyası.
            </p>
            <Link href="/studio" className="underline">
              Detayları gör →
            </Link>
          </div>

          {/* ARTISTS */}
          <div className="border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">Lalin</h2>
            <p className="mb-4 opacity-80">
              Yeni nesil pop anlatımı.
            </p>
            <Link href="/artists/lalin" className="underline">
              Sanatçı sayfası →
            </Link>
          </div>

          {/* BOOKS */}
          <div className="border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">Kitaplar</h2>
            <p className="mb-4 opacity-80">
              Işığın Tapınağı ve mitolojik eserler.
            </p>
            <Link href="/books" className="underline">
              Kitaplara göz at →
            </Link>
          </div>

          {/* GAMES */}
          <div className="border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">Oyunlar</h2>
            <p className="mb-4 opacity-80">
              Reflex Rush ve yeni projeler.
            </p>
            <Link href="/games" className="underline">
              Oyunları incele →
            </Link>
          </div>

          {/* CONTACT */}
          <div className="border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">İletişim</h2>
            <p className="mb-4 opacity-80">
              İş birlikleri ve projeler için.
            </p>
            <Link href="/contact" className="underline">
              Bize ulaş →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

