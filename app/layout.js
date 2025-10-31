"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Poppins } from "next/font/google";
import { useEffect } from "react";

// ✅ Optimized Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Visionary Creatix | Digital Agency",
  description:
    "Visionary Creatix is a modern digital agency providing web development, branding, and creative solutions to help businesses grow online.",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // ✅ Reduce animation durations globally
      document.documentElement.style.setProperty("--motion-scale", "0.5");

      // ✅ Disable hardware-expensive motion (Framer, scroll effects)
      document.documentElement.style.setProperty("--reduce-motion", "true");

      // ✅ Improve scroll and paint performance
      document.body.style.setProperty("overscrollBehavior", "contain");
      document.body.style.setProperty("-webkit-overflow-scrolling", "touch");
      document.body.style.setProperty("scrollBehavior", "smooth");
      document.body.style.setProperty("willChange", "transform");
      document.body.style.setProperty("backfaceVisibility", "hidden");
      document.body.style.setProperty("transform", "translateZ(0)");
    } else {
      document.documentElement.style.setProperty("--motion-scale", "1");
      document.documentElement.style.removeProperty("--reduce-motion");
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gradient-to-b from-black via-[#030b2a] to-[#000814] text-white overflow-x-hidden`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}







// import "./globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Poppins } from "next/font/google";

// // ✅ Optimized Google Font
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });
   
// export const metadata = {
//   title: "Visionary Creatix | Digital Agency",
//   description:
//     "Visionary Creatix is a modern digital agency providing web development, branding, and creative solutions to help businesses grow online.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${poppins.className} bg-gradient-to-b from-black via-[#030b2a] to-[#000814] text-white`}>
//         {/* Navbar */}
//         <Navbar />

//         {/* Main Content */}
//         <main>{children}</main>

//         <Footer />

         
       
//       </body>
//     </html>
//   );
// }
        