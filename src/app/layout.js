import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee"; 
import CustomCursor from "@/components/CustomCursor"; 
import Preloader from "@/components/Preloader"; 
import SmoothScroll from "@/components/SmoothScroll"; // Lenis bileşeni eklendi
import "./globals.css";

export const metadata = {
  title: "Little Story Labs | Creative Studio",
  description: "Little Story Labs; müzik yapan, hikâyeler, kitaplar, oyunlar ve dijital karakterler üreten bağımsız bir yaratıcı stüdyodur.",
  icons: {
    icon: "/favicon.ico?v=1",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-black text-white antialiased selection:bg-blue-500 selection:text-white">
        
        {/* Lenis Smooth Scroll Kapsayıcısı */}
        <SmoothScroll>
          
          {/* GRAIN OVERLAY - Sitenin analog dokusu */}
          <div className="grain-overlay" />

          {/* PRELOADER - Açılış Ekranı */}
          <Preloader />

          {/* ÖZEL İMLEÇ - Mavi İşaret Parmağı */}
          <CustomCursor />

          {/* ARKA PLAN AURA - Derinlik Efekti */}
          <div className="bg-aura" />

          {/* HEADER */}
          <header className="w-full border-b border-white/5 sticky top-0 bg-black/80 backdrop-blur-xl z-[100]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center py-4 h-auto md:h-24 gap-6 md:gap-0">

                {/* LOGO */}
                <div className="shrink-0 md:flex-1 md:flex md:justify-start">
                  <Link href="/" className="flex items-center group relative">
                    
                    {/* LOGO ARKASI PARLAMA */}
                    <div className="absolute inset-0 bg-blue-500/10 blur-[15px] rounded-full group-hover:bg-blue-500/25 transition-all duration-700 scale-75"></div>

                    <div className="relative">
                      <Image
                        src="/images/logo-v2.png"
                        alt="Little Story Labs"
                        width={55} 
                        height={55}
                        className="rounded-md md:w-[60px] md:h-[60px] transition-all duration-700 
                                   brightness-105 contrast-110 
                                   group-hover:scale-105 group-hover:brightness-115 
                                   drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                        priority
                      />
                    </div>

                    {/* LOGO YANINDAKİ METİN */}
                    <div className="ml-3 hidden lg:block overflow-hidden leading-tight">
                        <span className="text-white font-bold tracking-tight text-[15px] block group-hover:text-blue-400 transition-colors duration-500">
                            LITTLE STORY
                        </span>
                        <span className="text-blue-500/80 font-medium tracking-[0.4em] text-[8px] block mt-0.5 uppercase">
                            LABS
                        </span>
                    </div>
                  </Link>
                </div>

                {/* MENÜ */}
                <nav className="w-full md:w-auto md:flex-[2] flex justify-center">
                  <div className="flex items-center justify-center gap-8 md:gap-12 text-[11px] sm:text-[13px] md:text-[14px] font-bold tracking-[0.15em] uppercase overflow-x-auto no-scrollbar whitespace-nowrap px-4">
                    
                    <Link href="/" className="text-gray-500 hover:text-white transition-all duration-300 shrink-0">
                      ANA SAYFA
                    </Link>
                    
                    <Link href="/artists/lalin" className="relative text-blue-400 hover:text-blue-300 transition-all duration-300 shrink-0 flex flex-col items-center group">
                      LALİN ARMA
                      <span className="absolute -bottom-2 w-full h-[2px] bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] scale-x-110"></span>
                    </Link>

                    <Link href="/books" className="text-amber-600/90 hover:text-amber-400 hover:scale-105 transition-all duration-300 shrink-0">
                      KİTAP
                    </Link>

                    <Link href="/games" className="text-purple-500/90 hover:text-purple-400 hover:scale-105 transition-all duration-300 shrink-0">
                      OYUN
                    </Link>

                    <Link href="/contact" className="text-cyan-500/90 hover:text-cyan-400 hover:scale-105 transition-all duration-300 shrink-0">
                      İLETİŞİM
                    </Link>
                  </div>
                </nav>

                <div className="hidden md:flex md:flex-1"></div>

              </div>
            </div>
          </header>

          {/* AKAN YAZI */}
          <Marquee />

          {/* MAIN CONTENT */}
          <main className="w-full max-w-full min-h-screen relative z-10">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="mt-12 md:mt-24 border-t border-white/5 py-16 bg-gradient-to-t from-blue-900/5 to-transparent relative z-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left text-sm opacity-70">

              <div className="flex flex-col items-center md:items-start">
                <p className="font-bold opacity-100 text-xl tracking-tight text-white">
                  LITTLE STORY <span className="text-blue-500">LABS</span>
                </p>
                <p className="mt-4 max-w-xs leading-relaxed text-gray-400">
                  Müzik, hikâyeler, kitaplar, oyunlar ve dijital karakterler
                  üzerine çalışan bağımsız bir yaratıcı stüdyo.
                </p>
              </div>

              <div className="flex flex-col md:items-end gap-3 text-gray-400">
                <div className="flex gap-6 mb-2">
                  <Link href="/artists/lalin" className="hover:text-blue-400">Lalin</Link>
                  <Link href="/books" className="hover:text-blue-400">Kitaplar</Link>
                  <Link href="/contact" className="hover:text-blue-400">İletişim</Link>
                </div>
                <span>© {new Date().getFullYear()} Little Story Labs</span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Türkiye</span>
              </div>

            </div>
          </footer>

        </SmoothScroll>
      </body>
    </html>
  );
}