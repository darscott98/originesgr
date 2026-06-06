import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Hero from "@/sections/Hero";
import Ticker from "@/sections/Ticker";
import Intro from "@/sections/Intro";
import Societa from "@/sections/Societa";
import Mercato from "@/sections/Mercato";
import Settori from "@/sections/Settori";
import Fondi from "@/sections/Fondi";
import Struttura from "@/sections/Struttura";
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
        <Mercato />
        <Settori />
        <Fondi />
        <Struttura />
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
