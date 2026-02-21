"use client"; // Animasyonlar için gerekli

import Hero from "@/components/Hero";
import { motion } from "framer-motion"; // Animasyon kütüphanesi
import Aura from "@/components/Aura"; // Arka plan derinliği

export default function StudioPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* ARKA PLAN DERİNLİĞİ */}
      <Aura />

      {/* HERO - Hero animasyonları otomatik çalışacaktır */}
      <Hero
        title="Stüdyomuz Hakkında"
        subtitle="Little Story Labs — teknoloji ve hikâyenin buluştuğu yer."
        image="/images/hero/studio.jpg"
      />

      <section className="relative z-10 max-w-4xl mx-auto py-16 px-4 space-y-16">

        {/* TANIM - Süzülerek geliş */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          <p>
            Little Story Labs, hikâye anlatımını teknoloji ile birleştiren
            bağımsız bir yaratıcı stüdyodur.
          </p>

          <p>
            Edebiyat, dijital karakterler ve oyun deneyimleri aynı anlatı
            evreninde buluşur. Amaç yalnızca içerik üretmek değil,
            <span className="text-blue-400 font-medium"> yaşayan bir dünya inşa etmektir.</span>
          </p>
        </motion.div>

        {/* PROJELER - Kart efekti ve mavi vurgular */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-blue-500/20 rounded-2xl p-8 md:p-12 bg-white/5 backdrop-blur-sm shadow-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            Üretim Alanlarımız
          </h2>

          <ul className="space-y-6">
            {[
              { emoji: "📖", text: "Mitoloji temelli roman projeleri", highlight: "(Işığın Tapınağı)" },
              { emoji: "🎮", text: "Deneysel mobil oyunlar", highlight: "(Reflex Rush ve yeni projeler)" },
              { emoji: "🎭", text: "Sanatçılar ve dijital anlatıcı karakterler", highlight: "(Lalin)" }
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="flex items-start gap-4 text-gray-300 md:text-lg"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span>
                  {item.text} <span className="text-blue-400 block md:inline font-medium">{item.highlight}</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* VİZYON - Soluktan parlağa geçiş */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-white flex items-center gap-4">
            Vizyon
            <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent" />
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Babil’den Efes’e uzanan anlatılar, dijital karakterler ve
              etkileşimli deneyimler tek bir yaratıcı evrende birleşir.
            </p>

            <p>
              Little Story Labs, anlatıyı kitap, oyun ve yapay zekâ
              aracılığıyla yeni bir forma taşımayı hedefler.
            </p>
          </div>
        </motion.div>

        {/* İMZA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-10 border-t border-white/10 text-blue-400/60 font-medium tracking-widest text-sm uppercase"
        >
          <p>Little Story Labs Team</p>
        </motion.div>

      </section>
    </main>
  );
}