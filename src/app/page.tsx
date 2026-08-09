import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Tarieven from "@/components/Tarieven";
import Werkgebied from "@/components/Werkgebied";
import Werkwijze from "@/components/Werkwijze";
import WieBenIk from "@/components/WieBenIk";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Werkwijze />
        <Portfolio />
        <Tarieven />
        <WieBenIk />
        <Werkgebied />
      </main>
      <Footer />
    </>
  );
}
