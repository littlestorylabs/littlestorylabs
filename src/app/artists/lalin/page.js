"use client"; // Animasyonlar için gerekli

import { Instagram, Youtube, Music } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion"; // Animasyon kütüphanesi
import Aura from "@/components/Aura"; // Önceki adımda oluşturduğumuz Aura bileşeni

export default function LalinPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* 1. ADIM: Arka Plan Aura Efekti */}
      <Aura />

      <section className="relative z-10 max-w-4xl mx-auto py-8 md:py-16 px-4">
        
        {/* 2. ADIM: Fotoğraf - Framer Motion ile Süzülerek Geliş */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] md:h-[420px] rounded-xl overflow-hidden mb-10 shadow-2xl border border-white/5"
        >
          <Image
            src="/images/artists/lalinphoto.jpg"
            alt="Lalin"
            fill
            className="object-cover"
            priority
          />
          {/* Fotoğrafın üzerine çok hafif bir gradyan ekleyerek derinlik katalım */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        {/* 3. ADIM: İsim Animasyonu */}
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left text-white"
        >
          Lalin
        </motion.h1>

        {/* 4. ADIM: Biyografi Metni Animasyonu */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl space-y-4 opacity-90 text-center md:text-left mx-auto md:mx-0 text-gray-200"
        >
          <p>
            Lalin Arma, 19 Mayıs'ta İzmir’de doğdu ve müziği her zaman kendini ifade etmenin
            en doğal yolu olarak gördü. Şarkılarında duyguları saklamaz;
            hissettiklerini olduğu gibi paylaşır. Onun için müzik,
            bir performanstan çok bir bağ kurma biçimi.
          </p>

          <p>
            Sadelikten güç alan tarzı ve içten yorumuyla dinleyicisini kendi
            dünyasına davet eder. Sahnedeyken mesafeler kaybolur;
            geriye sadece ortak bir his kalır.
          </p>

          <p>
            Yeni şarkılarıyla kendi yolunu anlatmaya devam ediyor.
          </p>

          <p className="font-semibold pt-2 text-blue-400"> {/* Vurgu rengini mavi yaptık */}
            23 Şubat’ta ilk single'ı olan "Hadi Yak Gemileri" ile sizlerin karşısına çıkıyor.
          </p>
        </motion.div>

        {/* 5. ADIM: YouTube Klip Bölümü */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-12 w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-2xl border border-white/10"
        >
          <div className="relative pt-[56.25%] bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/imRocCaloS0" 
              title="Lalin Arma — Hadi Yak Gemileri (Official Music Video)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-blue-600/10 p-4 text-center border-t border-white/5">
            <p className="text-sm text-blue-400 uppercase tracking-[0.2em] font-bold">
              Resmi Video Klip 23 Şubat'ta Yayında
            </p>
          </div>
        </motion.div>

        {/* 6. ADIM: Sosyal Medya Butonları */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 pt-10"
        >
          <a
            href="https://www.instagram.com/lalinarma/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 px-5 py-2.5 rounded-full hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 text-sm min-w-[130px] text-white"
          >
            <Instagram size={18} />
            Instagram
          </a>

          <a
            href="https://www.youtube.com/@LalinArma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 px-5 py-2.5 rounded-full hover:bg-red-600 hover:border-red-500 transition-all duration-300 text-sm min-w-[130px] text-white"
          >
            <Youtube size={18} />
            YouTube
          </a>

          <a
            href="https://www.tiktok.com/@lalinarma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 px-5 py-2.5 rounded-full hover:bg-black hover:border-white/40 transition-all duration-300 text-sm min-w-[130px] text-white"
          >
            <Music size={18} />
            TikTok
          </a>
        </motion.div>

      </section>
    </main>
  );
}