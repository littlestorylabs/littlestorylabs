import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

export default function ArtistsPage() {
  return (
    <>
      <Hero
        title="Sanatçılarımız"
        subtitle="Little Story Labs bünyesindeki dijital karakterler ve anlatıcılar."
        image="/images/hero/artists.jpg"
      />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-lg opacity-80 mb-12">
          Lalin, Little Story Labs çatısı altında üreten bir sanatçıdır.
        Duygusal atmosferler, sinematik anlatım ve modern elektronik sound’un
        birleştiği özgün bir müzikal evrende üretim yapar.
        </p>

        <div className="max-w-xl">

          {/* LALIN */}
          <Link
            href="/artists/lalin"
            className="group border border-white/20 rounded-xl overflow-hidden hover:border-white transition"
          >
            <Image
              src="/images/artists/lalinphoto.jpg"
              alt="Lalin"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                Lalin
              </h2>
              <p className="opacity-70">
                Little Story Labs bünyesinde geliştirilen müzik projelerimizin ses sanatçısıdır.
              </p>
            </div>
          </Link>

        </div>
      </section>
    </>
  );
}
