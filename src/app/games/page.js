"use client"; // Animasyonlar için gerekli

import Hero from "@/components/Hero";
import { motion } from "framer-motion"; // Animasyon kütüphanesi
import Aura from "@/components/Aura"; // Arka plan derinliği

export default function GamesPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* ARKA PLAN DERİNLİĞİ */}
      <Aura />

      {/* HERO - Hero animasyonları otomatik çalışacaktır */}
      <Hero
        title="Oyunlar"
        subtitle="Refleks, ritim ve sezgi üzerine deneysel oyunlar."
        image="/images/hero/games.jpg"
      />

      <section className="relative z-10 max-w-4xl mx-auto text-center py-24 px-4">
        
        {/* COMING SOON - Nabız gibi büyüyüp küçülen bir animasyon ekledik */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white uppercase"
          >
            Coming Soon
          </motion.h2>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-blue-500 mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />

          <p className="text-lg md:text-xl text-gray-300 opacity-80 leading-relaxed max-w-2xl mx-auto">
            Little Story Labs oyun evreni şu anda geliştiriliyor.
            <br className="hidden md:block" />
            <span className="text-blue-400 font-medium">Refleks, ritim ve sezgi</span> odaklı deneysel oyunlar yakında burada olacak.
          </p>
        </motion.div>

        {/* GELECEK VİZYONU - Küçük ikonlar veya detaylar eklenebilir */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-40"
        >
          <div className="p-4 border border-white/10 rounded-xl">
            <p className="text-xs uppercase tracking-widest text-blue-400 font-bold">Reflex Rush</p>
          </div>
          <div className="p-4 border border-white/10 rounded-xl">
            <p className="text-xs uppercase tracking-widest text-blue-400 font-bold">Rhythm Project</p>
          </div>
          <div className="p-4 border border-white/10 rounded-xl">
            <p className="text-xs uppercase tracking-widest text-blue-400 font-bold">New Worlds</p>
          </div>
        </motion.div>

      </section>
    </main>
  );
}