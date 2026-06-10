import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Hero from "@/sections/Hero";
import Ticker from "@/sections/Ticker";
import Intro from "@/sections/Intro";
import Societa from "@/sections/Societa";
import Fondi from "@/sections/Fondi";
import Esg from "@/sections/Esg";
import Team from "@/sections/Team";
import News from "@/sections/News";
import Contatti from "@/sections/Contatti";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Intro />
        <Societa />
        <Fondi />
        <Team />
        <Esg />
        <News />
        <Contatti />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
