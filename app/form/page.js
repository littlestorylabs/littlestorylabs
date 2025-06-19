export default function FormPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Kişisel Hikaye Formu</h1>
        <form className="grid gap-4">
          <input type="text" placeholder="Çocuğun Adı" className="input" />
          <input type="number" placeholder="Yaş" className="input" />
          <select className="input">
            <option value="">Cinsiyet</option>
            <option value="erkek">Erkek</option>
            <option value="kız">Kız</option>
          </select>
          <input type="text" placeholder="Göz Rengi" className="input" />
          <input type="text" placeholder="Saç Rengi" className="input" />
          <input type="text" placeholder="Kişisel Özellikler (örnek: maceracı)" className="input" />
          <input type="text" placeholder="İlgi Alanları (örnek: uzay, hayvanlar)" className="input" />
          <input type="email" placeholder="E-posta Adresi" className="input" />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
          >
            Hikaye Oluştur
          </button>
        </form>
      </div>
    </main>
  );
}
