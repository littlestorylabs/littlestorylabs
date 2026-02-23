"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { MousePointer2 } from "lucide-react";
import { playSoftClick } from "@/components/SoundEffect";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Doğrudan mouse koordinatlarını tutan değerler
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // YAY AYARLARI (Maksimum Tepkisellik)
  // Stiffness'ı 2000'e çektik, Mass'i 0.01 yaptık. 
  // Bu ayar, mouse ile imleç arasındaki gecikmeyi (input lag) teknik olarak hissedilmez seviyeye indirir.
  const springConfig = { 
    damping: 50,    
    stiffness: 2000, 
    mass: 0.01 
  };
  
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Koordinatları anında set ediyoruz
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      playSoftClick(); 
    };
    
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    
    // Sayfa içindeki etkileşimli elemanları tara
    const elements = document.querySelectorAll("a, button, .interactive");
    elements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      elements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[1000001] hidden md:block text-blue-500"
      style={{
        x: springX,
        y: springY,
        // Pivot noktasını (ikonun ucunu) tam mouse koordinatına hizalar
        translateX: "-2px", 
        translateY: "-2px",
      }}
      animate={{
        scale: isHovering ? 1.3 : 1,
        filter: isHovering 
          ? "drop-shadow(0 0 20px rgba(59, 130, 246, 0.9))" 
          : "drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))",
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      <MousePointer2 
        size={28} 
        strokeWidth={2} 
        fill={isHovering ? "rgba(59, 130, 246, 0.3)" : "none"} 
      />
    </motion.div>
  );
}