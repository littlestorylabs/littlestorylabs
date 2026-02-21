"use client"; // Animasyonlar için gerekli

import Image from "next/image";
import Hero from "@/components/Hero";
import { motion } from "framer-motion"; // Animasyon kütüphanesi
import Aura from "@/components/Aura"; // Arka plan derinliği

export default function BooksPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* ARKA PLAN DERİNLİĞİ */}
      <Aura />

      {/* HERO - Hero bileşeninin içindeki animasyonlar otomatik çalışacak */}
      <Hero
        title="Kitaplar"
        subtitle="Mitoloji, tarih ve insan kaderi üzerine anlatılar."
        image="/images/hero/books.jpg"
      />

      <section className="relative z-10 max-w-5xl mx-auto py-16 px-4">

        {/* KİTAP KARTI */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* KAPAK - Soldan süzülerek gelme efekti */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden shadow-2xl border border-white/5"
          >
            <Image
              src="/images/books/isigin-tapinagi.jpg"
              alt="Işığın Tapınağı"
              fill
              className="object-contain bg-black/40 p-4" // Kitap kapağını biraz daha öne çıkardık
              priority
            />
            {/* Kapak üzerine hafif bir parıltı */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />
          </motion.div>

          {/* BİLGİ + LINKLER - Sağdan süzülerek gelme efekti */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              Işığın Tapınağı
            </h2>

            <p className="text-lg text-blue-400 font-medium mb-6">
              Babil’den Efes’e uzanan bir yolculuk
            </p>

            <p className="opacity-80 mb-10 text-gray-300 leading-relaxed">
              Tapınaklar yükselirken, bazı hayatlar sessizce feda edilir.
              Babil’den Efes’e uzanan kadim bir dünyada,
              ışık ile gölge arasında görünmeyen bir savaş sürmektedir.
              Maryam, geçmişinin acılarıyla yüzleşirken,
              kendini bu savaşın tam merkezinde bulur.
              Tapınaklar sırlar saklar,
              tarikatlar pusudadır
              ve kader, geri dönüşü olmayan bir yol çizer.
              Işığın Tapınağı,
              unutulmayı göze alan sessiz kahramanların,
              kadim güçlerin ve
              insanlığın geleceği uğruna ödenen bedellerin hikâyesi.
            </p>

            {/* LINKLER */}
<div className="flex flex-col gap-4">

  {/* Google Books - Dolgulu Mavi */}
  <a
    href="https://books.google.com.tr/books?id=N0eyEQAAQBAJ"
    target="_blank"
    rel="noopener noreferrer"
    className="group block text-center border border-blue-500 bg-blue-600/10 rounded-lg px-6 py-4 hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-900/20"
  >
    <span className="text-white font-semibold tracking-wide">
      Google Books’ta Oku →
    </span>
  </a>

  {/* Amazon - Çerçeveli Mavi */}
  <a
    href="https://www.amazon.com/dp/B0GJ5FRLR4"
    target="_blank"
    rel="noopener noreferrer"
    className="group block text-center border border-blue-500/40 bg-transparent rounded-lg px-6 py-4 hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300"
  >
    <span className="text-blue-400 group-hover:text-white transition-colors font-medium">
      Amazon KDP’de Gör →
    </span>
  </a>

</div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}