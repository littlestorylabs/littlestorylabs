"use client"; // Animasyon için client tarafında çalışmalı
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ title, subtitle, image }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} // Başlangıçta görünmez ve 20px aşağıda
      animate={{ opacity: 1, y: 0 }}    // Sayfa açılınca görünür ve yerine oturur
      transition={{ duration: 0.8, ease: "easeOut" }} // 0.8 saniyede yumuşakça
      className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden md:rounded-2xl mb-8 md:mb-12 shadow-xl"
    >
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/10 md:to-transparent" />

      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="w-full max-w-6xl mx-auto px-6 py-10 md:px-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} // Yazılar soldan süzülsün
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }} // Resimden biraz sonra başlasın
            className="max-w-2xl text-left"
          >
            <h1 className="text-white text-2xl md:text-5xl font-bold leading-[1.1] tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-white/90 text-sm md:text-lg leading-relaxed max-w-md md:max-w-xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}