import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="bg-[#f8f6f2]">
      <Hero />

      <Navigation />

      <section className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-black/50">
            A Day To Remember
          </p>

          <h2 className="font-serif text-4xl font-light md:text-6xl">
            Two stories.
            <br />
            One beautiful beginning.
          </h2>

          <p className="mt-8 leading-7 text-black/60">
            Welcome to our wedding album. A collection of moments,
            people and memories from a day we will always remember.
          </p>
        </div>
      </section>
    </main>
  );
}