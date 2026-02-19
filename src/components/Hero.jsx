import Image from "next/image";

export default function Hero({ title, subtitle, image }) {
  return (
    <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden md:rounded-2xl mb-8 md:mb-12">

      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay Düzenlemesi: 
          Mobilde alttan yukarı (to-t), masaüstünde soldan sağa (to-r).
          Bu, yazıların her iki cihazda da okunmasını sağlar.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />

      {/* Content Area */}
      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="w-full max-w-6xl mx-auto px-6 py-12 md:px-12">
          <div className="max-w-2xl text-left"> {/* Mobilde de sola dayalı kalsın ki menüyle uyumlu olsun */}
            
            <h1 className="
              text-white
              text-3xl
              md:text-6xl
              font-bold
              leading-[1.1]
              tracking-tight
            ">
              {title}
            </h1>

            <p className="
              mt-4
              text-white/90
              text-base
              md:text-xl
              leading-relaxed
              max-w-md
              md:max-w-xl
            ">
              {subtitle}
            </p>

          </div>
        </div>
      </div>

    </section>
  );
}