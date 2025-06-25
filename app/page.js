'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-xl w-full">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-900">
          Little Story Labs'a Hoş Geldiniz!
        </h1>
        <p className="text-gray-700 mb-6">
          Kişiye özel görselli hikayeler oluşturmak artık çok kolay. Çocuğunuzun özelliklerine göre özel bir hikaye oluşturun ve ona unutulmaz bir anı hediye edin.
        </p>
        <Link
          href="/form"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          Hemen Hikaye Oluştur
        </Link>
      </div>
    </main>
  );
}
