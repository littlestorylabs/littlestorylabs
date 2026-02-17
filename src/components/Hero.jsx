import Image from "next/image";

export default function Hero({ title, subtitle, image }) {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden rounded-2xl mb-12">

      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Dark Overlay (tıklamayı kapatmaz) */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-2xl px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg opacity-80">
            {subtitle}
          </p>
        </div>
      </div>

    </section>
  );
}

