import Hero from "@/components/Hero";

export default function GamesPage() {
  return (
    <>
      <Hero
        title="Oyunlar"
        subtitle="Refleks, ritim ve sezgi üzerine deneysel oyunlar."
        image="/images/hero/games.jpg"
      />

      <section className="max-w-4xl mx-auto text-center py-20">
  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    Coming Soon
  </h2>

  <p className="text-lg opacity-70 leading-relaxed">
    Little Story Labs oyun evreni şu anda geliştiriliyor.
    <br />
    Refleks, ritim ve sezgi odaklı deneysel oyunlar yakında burada olacak.
  </p>
</section>

    </>
  );
}
