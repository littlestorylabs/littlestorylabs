"use client";

import { Instagram, Youtube, Music } from "lucide-react";
import { motion } from "framer-motion";
import Aura from "@/components/Aura";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import Magnetic from "@/components/Magnetic";

export default function LalinPage() {
  const spotifyLink = "https://open.spotify.com/intl-tr/track/7EaN2S8jz9gg85xka8nQFC?si=0873dac82e314186"; 
  const appleMusicLink = "https://music.apple.com/tr/song/hadi-yak-gemileri/1876727919";

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <Aura />

      <section className="relative z-10 max-w-4xl mx-auto py-8 md:py-16 px-4">
        
        {/* FOTOĞRAF BÖLÜMÜ - Parallax & Reveal */}
        <Reveal>
          <div className="relative w-full h-[450px] md:h-[600px] mb-12 shadow-2xl border border-white/5 rounded-2xl overflow-hidden group">
            <ParallaxImage 
              src="/images/artists/lalinphoto.jpg" 
              alt="Lalin Arma" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </Reveal>

        {/* BAŞLIK VE ÜST BUTONLAR - Magnetic Etkisi */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-center md:text-left text-white tracking-tighter"
              initial={{ letterSpacing: "-0.05em" }}
              whileInView={{ letterSpacing: "-0.02em" }}
              transition={{ duration: 1.5 }}
            >
              Lalin
            </motion.h1>

            <div className="flex flex-wrap justify-center gap-3">
              <Magnetic>
                <a 
                  href={spotifyLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="interactive flex items-center gap-3 bg-[#1DB954]/10 border border-[#1DB954]/50 hover:bg-[#1DB954] text-white px-6 py-3 rounded-full transition-all duration-300 text-xs font-black tracking-widest"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.293c-.213.351-.67.463-1.025.254-2.875-1.756-6.49-2.153-10.747-1.177-.404.093-.803-.162-.896-.563-.093-.404.162-.802.563-.896 4.661-1.066 8.648-.619 11.851 1.348.355.213.466.673.254 1.034zm1.47-3.253c-.269.438-.847.579-1.285.311-3.287-2.022-8.305-2.607-12.191-1.427-.493.15-1.018-.127-1.168-.621-.149-.494.127-1.019.621-1.169 4.439-1.347 10-1.135 13.712 1.156.438.269.579.847.311 1.285zm.126-3.413c-3.944-2.343-10.457-2.559-14.253-1.405-.605.184-1.242-.164-1.426-.769-.184-.605.164-1.242.769-1.426 4.35-1.321 11.536-1.07 16.05 1.61.545.324.724 1.029.4 1.574-.323.545-1.028.723-1.574.4z"/>
                  </svg>
                  SPOTIFY
                </a>
              </Magnetic>

              <Magnetic>
                <a 
                  href={appleMusicLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="interactive flex items-center gap-3 bg-[#fa243c]/10 border border-[#fa243c]/50 hover:bg-[#fa243c] text-white px-6 py-3 rounded-full transition-all duration-300 text-xs font-black tracking-widest"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.133 21.314c-4.214 0-7.633-3.418-7.633-7.633 0-4.214 3.419-7.633 7.633-7.633 4.214 0 7.633 3.419 7.633 7.633 0 4.215-3.419 7.633-7.633 7.633zm0-16.593c-4.942 0-8.96 4.018-8.96 8.96s4.018 8.96 8.96 8.96 8.96-4.018 8.96-8.96-4.018-8.96-8.96-8.96zm1.144 11.531v-4.134c.542.427 1.155.65 1.761.65 1.458 0 2.457-1.168 2.457-2.671 0-1.492-.999-2.66-2.457-2.66-.606 0-1.219.223-1.761.644v-.444h-1.111v6.78c0 .87-.663 1.579-1.482 1.579-.818 0-1.482-.709-1.482-1.579 0-.87.664-1.579 1.482-1.579.176 0 .341.033.493.093v-1.13c-.157-.042-.323-.066-.493-.066-1.464 0-2.651 1.258-2.651 2.806 0 1.549 1.187 2.806 2.651 2.806 1.341 0 2.443-1.055 2.594-2.395z"/>
                  </svg>
                  APPLE MUSIC
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>

        {/* BİYOGRAFİ METNİ */}
        <Reveal>
          <div className="max-w-2xl space-y-6 opacity-90 text-center md:text-left mx-auto md:mx-0 text-gray-200 text-lg leading-relaxed font-light mb-20">
            <p>
              Lalin Arma, 19 Mayıs'ta İzmir’de doğdu ve müziği her zaman kendini ifade etmenin
              en doğal yolu olarak gördü. Şarkılarında duyguları saklamaz;
              hissettiklerini olduğu gibi paylaşır.
            </p>
            <p>
              Sadelikten güç alan tarzı ve içten yorumuyla dinleyicisini kendi
              dünyasına davet eder. İlk single çalışması olan <span className="text-blue-400 font-medium italic">"Hadi Yak Gemileri"</span> ile modern pop dünyasına iddialı bir giriş yapıyor.
            </p>
          </div>
        </Reveal>

        {/* VİDEO KLİP BÖLÜMÜ */}
        <Reveal>
          <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-[0_0_80px_rgba(59,130,246,0.1)] border border-white/10 group">
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                src="https://www.youtube.com/embed/imRocCaloS0" 
                title="Lalin Arma"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 flex flex-col md:flex-row justify-between items-center border-t border-white/5 gap-4">
              <div>
                <p className="text-[10px] text-blue-500 uppercase tracking-[0.4em] font-bold mb-1">Şimdi Yayında</p>
                <h3 className="text-white font-medium text-xl tracking-tight">Hadi Yak Gemileri — Official Video</h3>
              </div>
              <Magnetic>
                <a 
                  href="https://www.youtube.com/@LalinArma" 
                  target="_blank" 
                  className="interactive bg-white text-black px-8 py-3 rounded-full font-bold text-xs hover:bg-blue-500 hover:text-white transition-all duration-500"
                >
                  ABONE OL
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>

        {/* ALT SOSYAL MEDYA VE PLATFORMLAR */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-20 border-t border-white/5 mt-24">
            
            <Magnetic>
              <a href={spotifyLink} target="_blank" className="interactive flex items-center justify-center gap-3 border border-white/10 bg-white/5 px-6 py-3 rounded-full hover:bg-[#1DB954] hover:border-[#1DB954] transition-all duration-500 text-sm min-w-[150px] text-white font-medium">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.293c-.213.351-.67.463-1.025.254-2.875-1.756-6.49-2.153-10.747-1.177-.404.093-.803-.162-.896-.563-.093-.404.162-.802.563-.896 4.661-1.066 8.648-.619 11.851 1.348.355.213.466.673.254 1.034zm1.47-3.253c-.269.438-.847.579-1.285.311-3.287-2.022-8.305-2.607-12.191-1.427-.493.15-1.018-.127-1.168-.621-.149-.494.127-1.019.621-1.169 4.439-1.347 10-1.135 13.712 1.156.438.269.579.847.311 1.285zm.126-3.413c-3.944-2.343-10.457-2.559-14.253-1.405-.605.184-1.242-.164-1.426-.769-.184-.605.164-1.242.769-1.426 4.35-1.321 11.536-1.07 16.05 1.61.545.324.724 1.029.4 1.574-.323.545-1.028.723-1.574.4z"/></svg>
                Spotify
              </a>
            </Magnetic>

            <Magnetic>
              <a href={appleMusicLink} target="_blank" className="interactive flex items-center justify-center gap-3 border border-white/10 bg-white/5 px-6 py-3 rounded-full hover:bg-[#fa243c] hover:border-[#fa243c] transition-all duration-500 text-sm min-w-[150px] text-white font-medium">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.133 21.314c-4.214 0-7.633-3.418-7.633-7.633 0-4.214 3.419-7.633 7.633-7.633 4.214 0 7.633 3.419 7.633 7.633 0 4.215-3.419 7.633-7.633 7.633zm0-16.593c-4.942 0-8.96 4.018-8.96 8.96s4.018 8.96 8.96 8.96 8.96-4.018 8.96-8.96-4.018-8.96-8.96-8.96zm1.144 11.531v-4.134c.542.427 1.155.65 1.761.65 1.458 0 2.457-1.168 2.457-2.671 0-1.492-.999-2.66-2.457-2.66-.606 0-1.219.223-1.761.644v-.444h-1.111v6.78c0 .87-.663 1.579-1.482 1.579-.818 0-1.482-.709-1.482-1.579 0-.87.664-1.579 1.482-1.579.176 0 .341.033.493.093v-1.13c-.157-.042-.323-.066-.493-.066-1.464 0-2.651 1.258-2.651 2.806 0 1.549 1.187 2.806 2.651 2.806 1.341 0 2.443-1.055 2.594-2.395z"/></svg>
                Apple Music
              </a>
            </Magnetic>

            <Magnetic>
              <a href="https://www.instagram.com/lalinarma/" target="_blank" className="interactive flex items-center justify-center gap-3 border border-white/10 bg-white/5 px-6 py-3 rounded-full hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent transition-all duration-500 text-sm text-white font-medium">
                <Instagram size={18} /> Instagram
              </a>
            </Magnetic>

            <Magnetic>
              <a href="https://www.youtube.com/@LalinArma" target="_blank" className="interactive flex items-center justify-center gap-3 border border-white/10 bg-white/5 px-6 py-3 rounded-full hover:bg-red-600 hover:border-red-500 transition-all duration-500 text-sm text-white font-medium">
                <Youtube size={18} /> YouTube
              </a>
            </Magnetic>

            <Magnetic>
              <a href="https://www.tiktok.com/@lalinarma" target="_blank" className="interactive flex items-center justify-center gap-3 border border-white/10 bg-white/5 px-6 py-3 rounded-full hover:bg-black hover:border-white/40 transition-all duration-500 text-sm text-white font-medium">
                <Music size={18} /> TikTok
              </a>
            </Magnetic>
          </div>
        </Reveal>

      </section>
    </main>
  );
}