import Image from "next/image";

export default function Hero({ title, subtitle, image }) {
  return (
    /* h-[45vh] mobilde ekranın yarısından azı, md:h-[55vh] masaüstünde panoramik duruş sağlar */
    <section className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden md:rounded-2xl mb-8 md:mb-12 shadow-xl">

      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay: Görsel daraldığı için gradyanı biraz daha yumuşattık */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/10 md:to-transparent" />

      {/* Content Area */}
      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="w-full max-w-6xl mx-auto px-6 py-10 md:px-12">
          <div className="max-w-2xl text-left"> 
            
            <h1 className="
              text-white
              text-2xl        /* Mobilde daha zarif */
              md:text-5xl     /* Masaüstünde sinematik ama yormayan boyut */
              font-bold
              leading-[1.1]
              tracking-tight
            ">
              {title}
            </h1>

            {subtitle && (
              <p className="
                mt-3
                text-white/90
                text-sm        /* Mobilde okuması kolay küçük yazı */
                md:text-lg      /* Masaüstünde geniş boşluk hissi */
                leading-relaxed
                max-w-md
                md:max-w-xl
              ">
                {subtitle}
              </p>
            )}

          </div>
        </div>
      </div>

    </section>
  );
}