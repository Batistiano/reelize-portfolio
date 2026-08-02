import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SobreReelize } from "@/components/SobreReelize";
import { Portfolio } from "@/components/Portfolio";
import { Proceso } from "@/components/Proceso";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SobreReelize />
      <Portfolio />
      <Proceso />
    </main>
  );
}
