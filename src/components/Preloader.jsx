"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2.5 saniye sonra yükleme ekranını kapat
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", // Yukarı doğru kayarak açılır
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[1000000] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            {/* Parlayan Logo veya İsim */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "10px" }}
              animate={{ 
                opacity: 1, 
                letterSpacing: "2px",
                transition: { duration: 1.5, ease: "easeOut" } 
              }}
              className="text-white text-2xl md:text-4xl font-light tracking-[0.2em] uppercase"
            >
              Little Story Labs
            </motion.h1>
            
            {/* Lalin için alt metin veya slogan */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 0.5, 
                y: 0,
                transition: { delay: 1, duration: 0.8 } 
              }}
              className="text-blue-400 text-xs mt-4 tracking-[0.5em]"
            >
              PRESENTS
            </motion.p>

            {/* Alttaki yükleme çizgisi */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-[1px] bg-blue-500 mt-8"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}