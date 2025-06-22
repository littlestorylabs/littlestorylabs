export default function FormPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 md:p-6 lg:p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-extrabold mb-2 text-center text-gray-900">Kişisel Hikaye Formu</h1>
        <p className="text-center text-gray-600 mb-6 italic">Kahramanı Olduğun Serüvenin Anahtarı Aşağıda Saklı</p>

        <form className="grid gap-4 text-gray-900">

          <label className="font-semibold">Hikaye Dili</label>
          <select className="input text-gray-900 placeholder-gray-700">
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

          <label className="font-semibold">Çocuğun Adı</label>
          <input type="text" placeholder="Çocuğun Adı" className="input text-gray-900 placeholder-gray-700" />

          <label className="font-semibold">Yaş</label>
          <input type="number" placeholder="Yaş" className="input text-gray-900 placeholder-gray-700" />

          <label className="font-semibold">Cinsiyet</label>
          <select className="input text-gray-900 placeholder-gray-700">
            <option value="">Seçiniz</option>
            <option value="erkek">Erkek</option>
            <option value="kız">Kız</option>
          </select>

          <label className="font-semibold">Göz Rengi</label>
          <input type="text" placeholder="Göz Rengi" className="input text-gray-900 placeholder-gray-700" />

          <label className="font-semibold">Saç Rengi</label>
          <input type="text" placeholder="Saç Rengi" className="input text-gray-900 placeholder-gray-700" />

          <label className="font-semibold">Kişisel Özellikler</label>
          <input type="text" placeholder="(örnek: maceracı, neşeli)" className="input text-gray-900 placeholder-gray-700" />

          <label className="font-semibold">İlgi Alanları</label>
          <input type="text" placeholder="(örnek: uzay, hayvanlar)" className="input text-gray-900 placeholder-gray-700" />

          <label className="font-semibold">E-posta Adresi</label>
          <input type="email" placeholder="E-posta adresi" className="input text-gray-900 placeholder-gray-700" />

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
