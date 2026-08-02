import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SobreReelize } from "@/components/SobreReelize";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SobreReelize />
      <Portfolio />
    </main>
  );
}
