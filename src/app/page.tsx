import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <About />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
