"use client"; // Animasyonlar için gerekli

import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Animasyon kütüphanesi
import Aura from "@/components/Aura"; // Arka plan derinliği

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* ARKA PLAN DERİNLİĞİ */}
      <Aura />

      {/* HERO IMAGE - Hero bileşeninin kendi içindeki animasyonları zaten yapmıştık */}
      <Hero
        title="Little Story Labs"
        subtitle="Müzik yapan, hikâyeler üreten, dijital kitaplar yayınlayan, oyunlar ve dijital karakterler üreten bağımsız bir yaratıcı stüdyo."
        image="/images/hero/home.jpg"
      />

      {/* LALIN SPOTLIGHT */}
      <section className="relative z-10 max-w-6xl mx-auto py-12 md:py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* FOTO - Süzülerek Geliş */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/5"
          >
            <Image
              src="/images/artists/lalin.jpg"
              alt="Lalin Arma"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* METİN - Sağdan Süzülerek Geliş */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Lalin
            </h2>

            <p className="text-base md:text-lg opacity-80 mb-8 text-gray-300">
              O bir Star olarak doğdu.<br className="hidden md:block" />
              Duyguyu merkeze alan güçlü bir ses.<br className="hidden md:block" />
              Hikâyelerden doğan büyük müzik dünyasını<br className="hidden md:block" />
              sizlerin zevkine sunuyor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/artists/lalin"
                className="border border-blue-500 bg-blue-600/10 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 text-center font-medium shadow-lg shadow-blue-900/20"
              >
                Lalin’i Keşfet →
              </Link>

              <Link
                href="/contact"
                className="border border-white/20 px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-center text-white"
              >
                İş Birliği
              </Link>
            </div>

            <p className="mt-8 text-sm text-blue-400 font-medium tracking-wide uppercase">
              23 Şubat tüm platformlarda. Takipte kalın.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ANA İÇERİK - 5'li Kutu Grubu */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {[
            { title: "Stüdyomuz", desc: "Little Story Labs’in vizyonu ve yaratıcı dünyası.", link: "/studio", label: "Detayları gör" },
            { title: "Lalin", desc: "Yeni nesil pop anlatımı.", link: "/artists/lalin", label: "Sanatçı sayfası" },
            { title: "Kitaplar", desc: "Işığın Tapınağı ve mitolojik eserler.", link: "/books", label: "Kitaplara göz at" },
            { title: "Oyunlar", desc: "Reflex Rush ve yeni projeler.", link: "/games", label: "Oyunları incele" },
            { title: "İletişim", desc: "İş birlikleri ve projeler için.", link: "/contact", label: "Bize ulaş" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500"
            >
              <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h2>
              <p className="text-sm mb-4 opacity-70 text-gray-400">
                {item.desc}
              </p>
              <Link href={item.link} className="text-sm underline text-blue-400/80 hover:text-blue-400 transition-colors">
                {item.label} →
              </Link>
            </motion.div>
          ))}

        </div>
      </section>
    </main>
  );
}