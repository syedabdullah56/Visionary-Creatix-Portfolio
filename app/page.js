"use client";

import React from "react";

import HeroComp from "../components/Hero";
import AboutComp from "../components/About";
import TestimonialsComp from "../components/Testimonials";
import ContactComp from "../components/Contact";
import ServicesComp from "../components/Services";

// memo freeze to avoid re-render 
const Hero = React.memo(HeroComp);
const About = React.memo(AboutComp);
const Testimonials = React.memo(TestimonialsComp);
const Contact = React.memo(ContactComp);
const Services = React.memo(ServicesComp);

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














// import Hero from "../components/Hero";
// import About from "../components/About";
// import Testimonials from "../components/Testimonials";
// import Contact from "../components/Contact";
// import Services from "../components/Services";

// export default function Home() {
//   return (
//     <main className="scroll-smooth">
//       <Hero />
//       <About />
//       <Services />
//       <Testimonials /> 
//       <Contact />     
//     </main>
//   );
// }

