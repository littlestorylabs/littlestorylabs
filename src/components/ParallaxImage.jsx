"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ParallaxImage({ src, alt }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  // Hareketi çok daha minimal yapıyoruz (10px yerine 5px), böylece scale'i düşürebiliriz
  const moveX = useTransform(springX, [0, 2000], [5, -5]);
  const moveY = useTransform(springY, [0, 2000], [5, -5]);

  return (
    <div 
      className="w-full h-full overflow-hidden relative"
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ x: moveX, y: moveY, scale: 1.02 }} // Scale'i 1.05'ten 1.02'ye çektik (yakınlaşma azaldı)
        className="w-full h-full object-cover object-top" // object-top ekledik, kafa kısmını kesmez
      />
    </div>
  );
}