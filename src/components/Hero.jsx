import Image from "next/image";

export default function Hero({ title, subtitle, image }) {
  return (
    <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden rounded-2xl mb-12">

      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      {/* Soft bottom fade for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-2xl px-6 md:px-12">

          <h1 className="
            text-white
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
            tracking-tight
          ">
            {title}
          </h1>

          <p className="
            mt-4
            text-white/90
            text-lg
            md:text-xl
            leading-relaxed
          ">
            {subtitle}
          </p>

          {/* Optional CTA alanı — ileride konser / dinle linki koyabilirsin */}
          {/* 
          <div className="mt-8">
            <a
              href="#"
              className="inline-block border border-white/40 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Lalini Keşfet →
            </a>
          </div>
          */}

        </div>
      </div>

    </section>
  );
}

