"use client";

import { useEffect, useState, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Preload everything before showing on mobile
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => setIsLoaded(true), 1000); // give time to fully render
      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, [isMobile]);

  if (!isLoaded && isMobile) {
    return (
      <main className="flex justify-center items-center h-screen bg-black text-white text-lg font-semibold">
        Loading fast experience...
      </main>
    );
  }

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <main className="scroll-smooth overflow-x-hidden">
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
      </Suspense>
    </MotionConfig>
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

