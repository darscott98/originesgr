import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Problem from "@/sections/Problem";
import Features from "@/sections/Features";
import HowItWorks from "@/sections/HowItWorks";
import Benefits from "@/sections/Benefits";
import UseCases from "@/sections/UseCases";
import Testimonials from "@/sections/Testimonials";
import Pricing from "@/sections/Pricing";
import FAQ from "@/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Benefits />
        <UseCases />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
