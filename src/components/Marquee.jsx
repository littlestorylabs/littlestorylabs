"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  // Lansman mesajın
  const message = "LALİN ARMA // 'HADİ YAK GEMİLERİ' // 23 ŞUBAT'TA TÜM DİJİTAL PLATFORMLARDA // RESMİ VİDEO KLİP YAYINDA // LITTLE STORY LABS PRESENTS // ";

  return (
    <div className="relative w-full bg-blue-600/10 border-b border-blue-500/20 py-2.5 overflow-hidden whitespace-nowrap flex z-40 backdrop-blur-sm">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        {/* Metni iki kez yan yana koyuyoruz ki döngü kesintisiz olsun */}
        <span className="text-blue-400 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase flex items-center">
          {message} {message}
        </span>
      </motion.div>
    </div>
  );
}