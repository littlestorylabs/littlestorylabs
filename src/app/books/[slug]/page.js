import Image from "next/image";
import Link from "next/link";

const books = {
  "isigin-tapinagi": {
    title: "Işığın Tapınağı",
    subtitle: "Babil’den Efes’e uzanan bir yolculuk",
    description: [
      "Işığın Tapınağı, antik dünyanın gölgeleri arasında geçen; mitoloji, inanç ve insan kaderini merkeze alan bir romandır.",
      "Babil’in gizemli yapılarından Efes’in mermer sütunlarına uzanan bu hikâye, ışık ile karanlık arasındaki görünmez savaşı anlatır.",
      "Roman, tarihsel atmosfer ile kurgusal anlatıyı bir araya getirerek zamansız bir evren kurar."
    ],
    status: "Hazırlanıyor",
    language: "Türkçe / İngilizce (planlanan)",
    platform: "Amazon KDP",
    cover: "/images/books/isigin-tapinagi.jpg",
    googleBooks: "https://books.google.com/",
    amazonKdp: "https://www.amazon.com/",
  },
};

export default function BookDetailPage({ params }) {
  const slug = params?.slug;
  const book = books[slug];

  if (!book) {
    return (
      <section className="max-w-4xl mx-auto py-20">
        <h1 className="text-3xl font-bold mb-4">Kitap bulunamadı</h1>
        <Link href="/books" className="underline">
          ← Kitaplara geri dön
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-12">
      
      <div className="grid md:grid-cols-2 gap-12">

        {/* KAPAK */}
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* METİN */}
        <div>
          <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
          <p className="text-lg opacity-70 mb-6">{book.subtitle}</p>

          <div className="space-y-4 opacity-80 mb-8">
            {book.description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <div className="text-sm opacity-60 mb-8">
            <p>Yayın durumu: {book.status}</p>
            <p>Dil: {book.language}</p>
            <p>Platform: {book.platform}</p>
          </div>

          {/* 🚨 ZORLA GÖRÜNÜR LİNK BLOĞU */}
          <div className="border-2 border-red-500 bg-neutral-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-red-400">
              🔗 LİNK TEST ALANI
            </h3>

            <a
  href={book.googleBooks}
  target="_blank"
  rel="noopener noreferrer"
  className="block text-white bg-white/5 border border-white/30 rounded-lg px-6 py-3 hover:bg-white hover:text-black transition"
>
  Google Books’ta Oku →
</a>

<a
  href={book.amazonKdp}
  target="_blank"
  rel="noopener noreferrer"
  className="block text-white bg-white/5 border border-white/30 rounded-lg px-6 py-3 hover:bg-white hover:text-black transition"
>
  Amazon KDP’de Yayınlanacak →
</a>

          </div>

        </div>
      </div>
    </section>
  );
}
