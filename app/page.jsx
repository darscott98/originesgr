import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Hero from "@/sections/Hero";
import Ticker from "@/sections/Ticker";
import Intro from "@/sections/Intro";
import Societa from "@/sections/Societa";
import Settori from "@/sections/Settori";
import Fondi from "@/sections/Fondi";
import Esg from "@/sections/Esg";
import Team from "@/sections/Team";
import News from "@/sections/News";
import Contatti from "@/sections/Contatti";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Intro />
        <Societa />
        <Settori />
        <Fondi />
        <Esg />
        <Team />
        <News />
        <Contatti />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
