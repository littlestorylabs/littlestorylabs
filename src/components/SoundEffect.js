export const playSoftClick = () => {
  const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"); 
  audio.volume = 0.1; // Çok derinden gelmeli, kullanıcıyı sıçratmamalı
  audio.play().catch(() => {}); // Kullanıcı etkileşimi olmadan çalmasını engeller (browser kuralı)
};