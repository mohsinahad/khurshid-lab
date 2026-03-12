import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import News from "@/components/News";
import Team from "@/components/Team";
import Positions from "@/components/Positions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Publications />
      <News />
      <Team />
      <Positions />
      <Contact />
      <Footer />
    </>
  );
}
