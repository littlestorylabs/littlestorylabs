'use client';

export default function FormPage() {

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const data = {
      dil: form[0].value,
      ad: form[1].value,
      yas: form[2].value,
      cinsiyet: form[3].value,
      gozRengi: form[4].value,
      sacRengi: form[5].value,
      ozellikler: form[6].value,
      ilgiler: form[7].value,
      email: form[8].value,
      stil: form[9].value,
    };

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("Sunucudan gelen cevap:", result);
    } catch (error) {
      console.error("İstek hatası:", error);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 md:p-6 lg:p-6 rounded-2xl shadow-lg w-full max-w-md scale-90">
        <h1 className="text-2xl font-extrabold mb-2 text-center text-gray-900">Kişisel Hikaye Formu</h1>
        <p className="text-center text-gray-700 mb-6 italic">Kahramanı Olduğun Serüvenin Anahtarı Aşağıda Saklı</p>

        <form className="grid gap-4 text-gray-900 font-semibold" onSubmit={handleSubmit}>

          <label>Hikaye Dili</label>
          <select className="input text-gray-900 font-bold" required>
            <option value="">Bir dil seçin</option>
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="it">Italiano</option>
            <option value="pt">Português</option>
            <option value="nl">Nederlands</option>
            <option value="ru">Русский</option>
            <option value="zh">中文</option>
            <option value="ar">العربية</option>
            <option value="ja">日本語</option>
          </select>

          <label>Çocuğun Adı</label>
          <input type="text" placeholder="Çocuğun Adı" className="input text-gray-900 font-bold" required />

          <label>Yaş</label>
          <input type="number" placeholder="Yaş" className="input text-gray-900 font-bold" required />

          <label>Cinsiyet</label>
          <select className="input text-gray-900 font-bold" required>
            <option value="">Seçiniz</option>
            <option value="erkek">Erkek</option>
            <option value="kız">Kız</option>
          </select>

          <label>Göz Rengi</label>
          <input type="text" placeholder="Göz Rengi" className="input text-gray-900 font-bold" required />

          <label>Saç Rengi</label>
          <input type="text" placeholder="Saç Rengi" className="input text-gray-900 font-bold" required />

          <label>Kişisel Özellikler</label>
          <input type="text" placeholder="(örnek: maceracı, neşeli)" className="input text-gray-900 font-bold" required />

          <label>İlgi Alanları</label>
          <input type="text" placeholder="(örnek: uzay, hayvanlar)" className="input text-gray-900 font-bold" required />

          <label>E-posta Adresi</label>
          <input type="email" placeholder="E-posta adresi" className="input text-gray-900 font-bold" required />

          <label>Görsel Stili</label>
          <select className="input text-gray-900 font-bold" required>
            <option value="">Bir stil seçin</option>
            <option value="watercolor">🎨 Sulu boya</option>
            <option value="cartoon">🖍️ Çizgi film</option>
            <option value="storybook">📚 Masal kitabı</option>
            <option value="realistic">📸 Gerçekçi</option>
            <option value="3d render">🧊 3D render</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 mt-4 rounded-xl hover:bg-blue-700 transition font-semibold"
          >
            Hikaye Oluştur
          </button>
        </form>
      </div>
    </main>
  );
}
