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
      <section className="max-w-6xl mx-auto py-12 md:py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* FOTO - Mobilde yükseklik biraz azaldı ki ekranı kaplamasın */}
          <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/artists/lalin.jpg"
              alt="Lalin Arma"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* METİN - Mobilde ortalandı, masaüstünde sola dayalı */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Lalin
            </h2>

            <p className="text-base md:text-lg opacity-80 mb-8">
              Duyguyu merkeze alan güçlü bir ses.<br className="hidden md:block" />
              Hikâyelerden doğan bir müzik dünyası.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/artists/lalin"
                className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-center"
              >
                Lalin’i Keşfet →
              </Link>

              <Link
                href="/contact"
                className="border border-white/30 px-8 py-3 rounded-lg hover:bg-white hover:text-black transition text-center"
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

      {/* ANA İÇERİK - 5'li Kutu Grubu */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {/* STUDIO */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition">
            <h2 className="text-xl font-semibold mb-3">Stüdyomuz</h2>
            <p className="text-sm mb-4 opacity-70">
              Little Story Labs’in vizyonu ve yaratıcı dünyası.
            </p>
            <Link href="/studio" className="text-sm underline hover:text-gray-400">
              Detayları gör →
            </Link>
          </div>

          {/* ARTISTS */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition">
            <h2 className="text-xl font-semibold mb-3">Lalin</h2>
            <p className="text-sm mb-4 opacity-70">
              Yeni nesil pop anlatımı.
            </p>
            <Link href="/artists/lalin" className="text-sm underline hover:text-gray-400">
              Sanatçı sayfası →
            </Link>
          </div>

          {/* BOOKS */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition">
            <h2 className="text-xl font-semibold mb-3">Kitaplar</h2>
            <p className="text-sm mb-4 opacity-70">
              Işığın Tapınağı ve mitolojik eserler.
            </p>
            <Link href="/books" className="text-sm underline hover:text-gray-400">
              Kitaplara göz at →
            </Link>
          </div>

          {/* GAMES */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition">
            <h2 className="text-xl font-semibold mb-3">Oyunlar</h2>
            <p className="text-sm mb-4 opacity-70">
              Reflex Rush ve yeni projeler.
            </p>
            <Link href="/games" className="text-sm underline hover:text-gray-400">
              Oyunları incele →
            </Link>
          </div>

          {/* CONTACT */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition">
            <h2 className="text-xl font-semibold mb-3">İletişim</h2>
            <p className="text-sm mb-4 opacity-70">
              İş birlikleri ve projeler için.
            </p>
            <Link href="/contact" className="text-sm underline hover:text-gray-400">
              Bize ulaş →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
