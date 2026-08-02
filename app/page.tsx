import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SobreReelize } from "@/components/SobreReelize";
import { Portfolio } from "@/components/Portfolio";
import { Proceso } from "@/components/Proceso";
import { Planes } from "@/components/Planes";
import { FAQ } from "@/components/FAQ";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";

export default function Home() {
  return (
    <main>
      <CursorGlow />
      <Navbar />
      <Hero />
      <SobreReelize />
      <Portfolio />
      <Proceso />
      <Planes />
      <FAQ />
      <Contacto />
      <Footer />
    </main>
  );
}
