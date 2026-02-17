import Hero from "@/components/Hero";

export default function StudioPage() {
  return (
    <>
      <Hero
        title="Stüdyomuz Hakkında"
        subtitle="Little Story Labs — teknoloji ve hikâyenin buluştuğu yer."
        image="/images/hero/studio.jpg"
      />

      <section className="max-w-4xl mx-auto py-16 space-y-12">

        {/* TANIM */}
        <div className="space-y-6 text-lg opacity-80">
          <p>
            Little Story Labs, hikâye anlatımını teknoloji ile birleştiren
            bağımsız bir yaratıcı stüdyodur.
          </p>

          <p>
            Edebiyat, dijital karakterler ve oyun deneyimleri aynı anlatı
            evreninde buluşur. Amaç yalnızca içerik üretmek değil,
            yaşayan bir dünya inşa etmektir.
          </p>
        </div>

        {/* PROJELER */}
        <div className="border border-white/10 rounded-2xl p-10 bg-white/5">
          <h2 className="text-2xl font-semibold mb-6">
            Üretim Alanlarımız
          </h2>

          <ul className="space-y-4 opacity-80">
            <li>📖 Mitoloji temelli roman projeleri (Işığın Tapınağı)</li>
            <li>🎮 Deneysel mobil oyunlar (Reflex Rush ve yeni projeler)</li>
            <li>🎭 Sanatçılar ve dijital anlatıcı karakterler</li>
          </ul>
        </div>

        {/* VİZYON */}
        <div className="space-y-6 text-lg opacity-80">
          <h2 className="text-2xl font-semibold opacity-100">
            Vizyon
          </h2>

          <p>
            Babil’den Efes’e uzanan anlatılar, dijital karakterler ve
            etkileşimli deneyimler tek bir yaratıcı evrende birleşir.
          </p>

          <p>
            Little Story Labs, anlatıyı kitap, oyun ve yapay zekâ
            aracılığıyla yeni bir forma taşımayı hedefler.
          </p>
        </div>

        {/* İMZA */}
        <div className="pt-10 border-t border-white/10 opacity-60">
          <p>Little Story Labs Team</p>
        </div>

      </section>
    </>
  );
}
