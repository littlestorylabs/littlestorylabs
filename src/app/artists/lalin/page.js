export const metadata = {
  title: "Lalin | Sanatçı Profili - Little Story Labs",
  description: "Lalin Arma'nın müzikal dünyasını keşfedin. 'Hadi Yak Gemileri' ve daha fazlası Little Story Labs'te.",
};

import { Instagram, Youtube, Music } from "lucide-react";
import Image from "next/image";

export default function LalinPage() {
  return (
    <section className="max-w-4xl mx-auto py-8 md:py-16 px-4">

      {/* FOTO - Mobilde yüksekliği biraz optimize ettik */}
      <div className="relative w-full h-[300px] md:h-[420px] rounded-xl overflow-hidden mb-10 shadow-2xl">
        <Image
          src="/images/artists/lalinphoto.jpg"
          alt="Lalin"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* İSİM */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
        Lalin
      </h1>

      {/* LALIN BIO */}
      <div className="max-w-2xl space-y-4 opacity-90 text-center md:text-left mx-auto md:mx-0">
        <p>
          Lalin Arma, 19 Mayıs'ta İzmir’de doğdu ve müziği her zaman kendini ifade etmenin
          en doğal yolu olarak gördü. Şarkılarında duyguları saklamaz;
          hissettiklerini olduğu gibi paylaşır. Onun için müzik,
          bir performanstan çok bir bağ kurma biçimi.
        </p>

        <p>
          Sadelikten güç alan tarzı ve içten yorumuyla dinleyicisini kendi
          dünyasına davet eder. Sahnedeyken mesafeler kaybolur;
          geriye sadece ortak bir his kalır.
        </p>

        <p>
          Yeni şarkılarıyla kendi yolunu anlatmaya devam ediyor.
        </p>

        <p className="font-semibold pt-2 text-white">
          23 Şubat’ta ilk single'ı olan "Hadi Yak Gemileri" ile sizlerin karşısına çıkıyor.
        </p>
      </div>

      {/* SOSYAL MEDYA - Kayma sorununu çözen bölüm */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 pt-10">

        <a
          href="https://www.instagram.com/lalinarma/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition text-sm min-w-[130px]"
        >
          <Instagram size={18} />
          Instagram
        </a>

        <a
          href="https://www.youtube.com/@LalinArma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition text-sm min-w-[130px]"
        >
          <Youtube size={18} />
          YouTube
        </a>

        <a
          href="https://www.tiktok.com/@lalinarma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition text-sm min-w-[130px]"
        >
          <Music size={18} />
          TikTok
        </a>

        {/* Buraya ileride Spotify ve Apple Music linklerini aynı sınıflarla (min-w-[130px]) ekleyebilirsin */}

      </div>

    </section>
  );
}
