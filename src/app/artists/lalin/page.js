import { Instagram, Youtube, Music } from "lucide-react";

import Image from "next/image";

export default function LalinPage() {
  return (
    <section className="max-w-4xl mx-auto py-16">

      {/* FOTO */}
      <div className="relative w-full h-[420px] rounded-xl overflow-hidden mb-10">
        <Image
          src="/images/artists/lalinphoto.jpg"
          alt="Lalin"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* İSİM */}
      <h1 className="text-4xl font-bold mb-4">
        Lalin
      </h1>

      {/* LALIN BIO */}
<div className="max-w-2xl space-y-4 opacity-90">
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

  <p className="font-semibold pt-2">
    23 Şubat’ta ilk single'ı olan "Hadi Yak Gemileri" ile sizlerin karşısına çıkıyor.
  </p>
</div>


     {/* SOSYAL MEDYA */}
<div className="flex gap-4 pt-6">

  <a
    href="https://www.instagram.com/lalinarma/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 border border-white/30 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
  >
    <Instagram size={18} />
    Instagram
  </a>

  <a
    href="https://www.youtube.com/@LalinArma"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 border border-white/30 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
  >
    <Youtube size={18} />
    YouTube
  </a>

  <a
    href="https://www.tiktok.com/@lalinarma"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 border border-white/30 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
  >
    <Music size={18} />
    TikTok
  </a>

</div>



    </section>
  );
}
