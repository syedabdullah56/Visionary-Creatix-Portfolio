"use client";

import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  // ✅ Detect mobile devices
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Preload and render full page *off-screen* before showing
  useEffect(() => {
    if (isMobile) {
      // Wait for React to mount and browser to paint everything
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsFullyLoaded(true);
        }, 800); // preload delay — adjust between 500–1000ms
      });
    } else {
      setIsFullyLoaded(true);
    }
  }, [isMobile]);

  // ✅ While preloading on mobile, show a smooth splash/loading screen
  if (isMobile && !isFullyLoaded) {
    return (
      <main className="flex justify-center items-center h-screen bg-black text-white text-lg font-semibold">
        Optimizing mobile experience...
      </main>
    );
  }

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

