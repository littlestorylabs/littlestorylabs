"use client"; // Animasyonlar için gerekli

import Hero from "@/components/Hero";
import { motion } from "framer-motion"; // Animasyon kütüphanesi
import Aura from "@/components/Aura"; // Arka plan derinliği

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* ARKA PLAN DERİNLİĞİ */}
      <Aura />

      {/* HERO - Hero animasyonları otomatik çalışacaktır */}
      <Hero
        title="İletişim"
        subtitle="Little Story Labs ile iş birliği, yayıncılık ve proje iletişimi."
        image="/images/hero/contact.jpg"
      />

      <section className="relative z-10 max-w-4xl mx-auto py-16 px-4">

        {/* AÇIKLAMA - Yukarıdan süzülerek geliş */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-lg md:text-xl text-gray-300 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Little Story Labs; hikâye üretimi, dijital karakterler,
            kitap projeleri ve deneysel oyunlar üzerine çalışan
            bağımsız bir yaratıcı stüdyodur.
          </p>
        </motion.div>

        {/* İLETİŞİM KARTI - Ölçeklenerek ve parlayarak geliş */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center bg-white/5 backdrop-blur-md shadow-2xl shadow-blue-900/10"
        >

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Kurumsal İletişim
          </h2>

          <p className="text-gray-400 mb-10">
            Yayıncılık, iş birlikleri ve proje teklifleri için:
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:info@littlestorylabs.com"
            className="inline-block border border-blue-500 bg-blue-600/10 text-blue-400 rounded-xl px-8 md:px-12 py-4 text-lg md:text-xl font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            info@littlestorylabs.com
          </motion.a>

        </motion.div>

        {/* ALT BİLGİ - Yavaşça beliren not */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-center mt-12 opacity-50 text-sm tracking-wide text-gray-400"
        >
          <p>
            Projeler hakkında tüm iş birlikleri için bizimle iletişime geçin.
          </p>
        </motion.div>

      </section>
    </main>
  );
}