import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Little Story Labs | Creative Studio",
  description: "Little Story Labs; müzik yapan, hikâyeler, kitaplar, oyunlar ve dijital karakterler üreten bağımsız bir yaratıcı stüdyodur.",
  icons: {
    icon: "/favicon.ico?v=1", // Sonuna eklediğimiz ?v=1 tarayıcıyı yenilemeye zorlar
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-black text-white antialiased overflow-x-hidden">

        {/* HEADER */}
<header className="w-full border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-md z-50">
  <div className="max-w-6xl mx-auto px-6">
    {/* Masaüstünde (md:) içeriği sola dayalı ve logoyla menü arasına mesafe koyan yapı */}
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start py-4 h-auto md:h-24 gap-6 md:gap-12">

      {/* LOGO */}
      <div className="shrink-0">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-v2.png"
            alt="Little Story Labs"
            width={55} 
            height={55}
            className="rounded-md md:w-[70px] md:h-[70px]"
            priority
          />
        </Link>
      </div>

      {/* MENÜ */}
      <nav className="w-full md:w-auto">
        <div className="flex items-center justify-center md:justify-start gap-6 text-[13px] sm:text-sm md:text-base font-medium overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link href="/" className="hover:text-gray-400 transition-colors shrink-0">Ana Sayfa</Link>
          <Link href="/artists/lalin" className="hover:text-gray-400 transition-colors shrink-0">Lalin Arma</Link>
          <Link href="/books" className="hover:text-gray-400 transition-colors shrink-0">Kitap</Link>
          <Link href="/games" className="hover:text-gray-400 transition-colors shrink-0">Oyun</Link>
          <Link href="/contact" className="hover:text-gray-400 transition-colors shrink-0">İletişim</Link>
        </div>
      </nav>

    </div>
  </div>
</header>

        <main className="p-4 md:p-6 w-full max-w-full overflow-hidden">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="mt-12 md:mt-24 border-t border-white/10 py-10">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left text-sm opacity-70">

            <div className="flex flex-col items-center md:items-start">
              <p className="font-semibold opacity-100 text-lg">Little Story Labs</p>
              <p className="mt-2 max-w-xs">
                Müzik, hikâyeler, kitaplar, oyunlar ve dijital karakterler
                üzerine çalışan bağımsız bir yaratıcı stüdyo.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span>© {new Date().getFullYear()} Little Story Labs</span>
              <span>Tüm hakları saklıdır.</span>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
