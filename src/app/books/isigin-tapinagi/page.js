import Image from "next/image";

export default function IsiginTapinagi() {
  return (
    <article className="max-w-3xl">
        <Image
  src="/books/isigin-tapinagi.jpg"
  alt="Işığın Tapınağı kitap kapağı"
  width={400}
  height={600}
  className="mb-6 rounded"
/>

      <h1 className="text-4xl font-bold mb-2">
        Işığın Tapınağı
      </h1>

      <p className="italic opacity-80 mb-6">
        Babil’den Efes’e uzanan bir yolculuk
      </p>

      <p className="mb-4">
        <strong>Işığın Tapınağı</strong>, antik dünyanın
        gölgeleri arasında geçen, mitoloji, inanç ve
        insan kaderini merkeze alan bir romandır.
      </p>

      <p className="mb-4">
        Babil’in gizemli yapılarından Efes’in mermer
        sütunlarına uzanan bu hikâye; ışık ile karanlık
        arasındaki görünmez savaşı anlatır.
      </p>

      <p className="mb-8">
        Roman, tarihsel atmosfer ile kurgusal anlatıyı
        bir araya getirerek zamansız bir evren kurar.
      </p>

      <div className="border-t border-white/10 pt-4 text-sm opacity-70">
        Yayın durumu: Hazırlanıyor<br />
        Dil: Türkçe / İngilizce (planlanan)<br />
        Platform: Amazon KDP
      </div>
    </article>
  );
}
