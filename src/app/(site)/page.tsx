import Hero from "@/components/sections/Hero";
import HomeSections from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <main id="main-content" className="relative z-10">
        <section id="hero" aria-label="Introduction" className="min-h-[100svh] scroll-mt-24">
          <Hero />
        </section>
        <HomeSections />
    </main>
  );
}