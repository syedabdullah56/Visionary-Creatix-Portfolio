import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Testimonials /> 
      <Contact />     
    </main>
  );
}
