import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Little Story Labs | Creative Studio",
  description:
    "Little Story Labs; müzik yapan, hikâyeler, kitaplar, oyunlar ve dijital karakterler üreten bağımsız bir yaratıcı stüdyodur.",

  openGraph: {
    title: "Little Story Labs",
    description:
      "Müzik yapan, hikâyeler, kitaplar, oyunlar ve dijital karakterler üreten bağımsız bir yaratıcı stüdyo.",
    url: "https://littlestorylabs.com",
    siteName: "Little Story Labs",
    images: [
      {
        url: "/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Little Story Labs",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Little Story Labs",
    description:
      "Müzik,hikâyeler, kitaplar, oyunlar ve dijital karakterler üreten yaratıcı stüdyo.",
    images: ["/images/og/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-black text-white">

        {/* HEADER */}
        <header className="p-6 border-b border-white/10">
          <div className="max-w-6xl mx-auto flex items-center gap-8">

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-v2.png"
                alt="Little Story Labs"
                width={100}
                height={100}
                className="rounded-md"
                priority
              />
            </Link>

            {/* MENÜ */}
            <nav className="flex gap-8 text-base font-medium">
              <Link href="/" className="hover:underline">Ana Sayfa</Link>
              <Link href="/artists/lalin" className="hover:underline">Lalin Arma</Link>
              <Link href="/books" className="hover:underline">Kitap</Link>
              <Link href="/games" className="hover:underline">Oyun</Link>
              <Link href="/contact" className="hover:underline">İletişim</Link>
            </nav>

          </div>
        </header>

        <main className="p-6">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="mt-24 border-t border-white/10 py-10">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-sm opacity-70">

            <div>
              <p className="font-semibold opacity-100">Little Story Labs</p>
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
