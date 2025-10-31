"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Hero from "../components/Hero";

const About = dynamic(() => import("../components/About"), { ssr: false });
const Services = dynamic(() => import("../components/Services"), { ssr: false });
const Testimonials = dynamic(() => import("../components/Testimonials"), { ssr: false });
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });

export default function Home() {
  // 🧩 Small performance tweak for mobile
  useEffect(() => {
    if (window.innerWidth <= 768) {
      // Reduce scroll lag by forcing hardware acceleration
      document.body.style.transform = "translateZ(0)";
      document.body.style.willChange = "transform";
    }
  }, []);

  return (
    <main className="scroll-smooth overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}








// "use client";

// import { useEffect, useState } from "react";
// import { MotionConfig } from "framer-motion";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Testimonials from "../components/Testimonials";
// import Contact from "../components/Contact";
// import Services from "../components/Services";

// export default function Home() {
//   const [isMobile, setIsMobile] = useState(false);

//   // Detecting if the user is on a mobile screen
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   return (
//     // Disabling or simplifying all Framer Motion animations on mobile
//     <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
//       <main className="scroll-smooth overflow-x-hidden">
//         <Hero />
//         <About />
//         <Services />
//         <Testimonials />
//         <Contact />
//       </main>
//     </MotionConfig>
//   );
// }





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

