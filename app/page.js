import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Services />
      <Testimonials /> 
      <Contact />     
    </main>
  );
}
