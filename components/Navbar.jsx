"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-black/90 backdrop-blur-lg border-b border-blue-900/40 shadow-[0_0_20px_rgba(0,150,255,0.2)]">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center h-[68px] md:h-[84px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logoCreatix3.png"
            alt="Visionary Creatix"
            width={250}
            height={120}
            className="w-[200px] sm:w-[240px] md:w-[300px] transition-transform duration-300 hover:scale-105 relative top-[1.5vh]"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-7 font-[Poppins] text-gray-300 text-[17px] tracking-wide relative">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              {item.name === "Services" ? (
                <div className="relative">
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${
                      pathname.includes("/services")
                        ? "bg-gradient-to-r from-blue-700/40 to-cyan-700/40 text-white border border-blue-600/40 shadow-[0_0_15px_rgba(0,150,255,0.3)]"
                        : "bg-[#0b0f18]/70 hover:bg-[#101623]/90 border border-gray-800 hover:border-blue-800 hover:text-white hover:shadow-[0_0_10px_rgba(0,150,255,0.3)]"
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {servicesOpen && (
                    <ul
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-0 mt-2 bg-[#0b0f18]/95 backdrop-blur-xl border border-blue-900/40 rounded-2xl shadow-[0_0_25px_rgba(0,150,255,0.2)] w-56 overflow-hidden animate-fadeIn"
                    >
                      {[
                        { title: "Web Development", link: "/services/web-development" },
                        { title: "SEO Optimization", link: "/services/seo" },
                        { title: "Graphic Designing", link: "/services/graphic-design" },
                        { title: "AI Services", link: "/services/ai-services" },
                        { title: "Ad Campaigns", link: "/services/ads-campaigns" },
                      ].map((service) => (
                        <li key={service.link}>
                          <Link
                            href={service.link}
                            className="block px-5 py-3 text-gray-300 hover:bg-gradient-to-r hover:from-blue-700/40 hover:to-cyan-700/40 hover:text-white transition-all duration-300"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-blue-700/40 to-cyan-700/40 text-white border border-blue-600/40 shadow-[0_0_15px_rgba(0,150,255,0.3)]"
                      : "bg-[#0b0f18]/70 hover:bg-[#101623]/90 border border-gray-800 hover:border-blue-800 hover:text-white hover:shadow-[0_0_10px_rgba(0,150,255,0.3)]"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 hover:text-white transition-transform duration-300 hover:scale-110 active:scale-95"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-[68px] left-0 w-full bg-gradient-to-b from-[#06090f]/95 to-[#0b101c]/95 backdrop-blur-2xl border-t border-blue-900/30 shadow-[0_0_25px_rgba(0,150,255,0.2)] transform transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4 text-gray-300 font-[Poppins] text-lg">
          {navItems.map((item) => (
            <li key={item.href} className="w-[85%]">
              {item.name === "Services" ? (
                <div className="text-center">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-[#0b0f18]/80 hover:bg-[#101623]/90 border border-gray-800 hover:border-blue-800 transition-all duration-300"
                  >
                    Services <ChevronDown size={18} className={`${servicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  {servicesOpen && (
                    <ul className="mt-3 space-y-2">
                      {[
                        { title: "Web Development", link: "/services/web-development" },
                        { title: "SEO Optimization", link: "/services/seo" },
                        { title: "Graphic Designing", link: "/services/graphic-design" },
                        { title: "Ads Campaigns", link: "/services/ads-campaigns" },
                      ].map((service) => (
                        <li key={service.link}>
                          <Link
                            href={service.link}
                            onClick={() => {
                              setMenuOpen(false);
                              setServicesOpen(false);
                            }}
                            className="block text-center text-gray-300 hover:text-white transition-all duration-300"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-center w-full px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-[1.07] active:scale-[0.97] hover:shadow-[0_0_10px_rgba(0,150,255,0.3)] ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-blue-700/50 to-cyan-700/50 text-white border border-blue-700/50"
                      : "bg-[#0b0f18]/80 hover:bg-[#101623]/90 border border-gray-800 hover:border-blue-800 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>    
    </nav>
  );
}

     




// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "#about" },   
//     { name: "Services", href: "#services" },
//     { name: "Testimonials", href: "#testimonials" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-[9999] bg-black/90 backdrop-blur-lg border-b border-blue-900/40 shadow-[0_0_20px_rgba(0,150,255,0.2)]">
//       <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center h-[68px] md:h-[84px]">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/logoCreatix3.png"
//             alt="Visionary Creatix"
//             width={250}
//             height={120}
//             className="w-[200px] sm:w-[240px] md:w-[300px] transition-transform duration-300 hover:scale-105 relative top-[1.5vh]"
//             priority
//           />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-7 font-[Poppins] text-gray-300 text-[17px] tracking-wide">
//           {navItems.map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
//                   pathname === item.href
//                     ? "bg-gradient-to-r from-blue-700/40 to-cyan-700/40 text-white border border-blue-600/40 shadow-[0_0_15px_rgba(0,150,255,0.3)]"
//                     : "bg-[#0b0f18]/70 hover:bg-[#101623]/90 border border-gray-800 hover:border-blue-800 hover:text-white hover:shadow-[0_0_10px_rgba(0,150,255,0.3)]"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-200 hover:text-white transition-transform duration-300 hover:scale-110 active:scale-95"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle Menu"
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       <div
//         className={`md:hidden absolute top-[68px] left-0 w-full bg-gradient-to-b from-[#06090f]/95 to-[#0b101c]/95 backdrop-blur-2xl border-t border-blue-900/30 shadow-[0_0_25px_rgba(0,150,255,0.2)] transform transition-all duration-500 ease-in-out ${
//           menuOpen
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 -translate-y-5 pointer-events-none"
//         }`}
//       >
//         <ul className="flex flex-col items-center py-6 space-y-4 text-gray-300 font-[Poppins] text-lg">
//           {navItems.map((item, index) => (
//             <li
//               key={item.href}
//               className="w-[85%]"
//               style={{
//                 animationDelay: `${index * 0.08}s`,
//                 animation: menuOpen
//                   ? `fadeInUp 0.4s ease ${index * 0.08}s forwards`
//                   : "none",
//               }}
//             >
//               <Link
//                 href={item.href}
//                 onClick={() => setMenuOpen(false)}
//                 className={`block text-center w-full px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-[1.07] active:scale-[0.97] hover:shadow-[0_0_10px_rgba(0,150,255,0.3)] ${
//                   pathname === item.href
//                     ? "bg-gradient-to-r from-blue-700/50 to-cyan-700/50 text-white border border-blue-700/50"
//                     : "bg-[#0b0f18]/80 hover:bg-[#101623]/90 border border-gray-800 hover:border-blue-800 hover:text-white"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         <div className="h-[2px] w-3/4 mx-auto bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700 rounded-full opacity-50"></div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </nav>
//   );
// }
