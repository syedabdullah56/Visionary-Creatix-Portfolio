"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // adjust how far the logo starts from left in mobile view
  const mobileLogoOffset = "-32px"; 

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-blue-900/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center h-[68px] md:h-[84px]">
        
        {/* Logo */}
        <div
          className="flex items-center gap-2 relative top-[1.8vh]"
          style={{
            marginLeft: mobileLogoOffset,
          }}
        >
          <Image
            src="/logoCreatix3.png"
            alt="Visionary Creatix"
            width={280}
            height={130}
            className="w-[230px] sm:w-[250px] md:w-[320px] transition-transform duration-300 hover:scale-110"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-7 font-[Poppins] text-gray-300 text-[17px] tracking-wide">
          {navItems.map((item) => (
            <li key={item.href}>
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

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-[68px] left-0 w-full bg-gradient-to-b from-[#06090f]/95 to-[#0b101c]/95 backdrop-blur-2xl border-t border-blue-900/30 shadow-[0_0_25px_rgba(0,150,255,0.2)] transform transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4 text-gray-300 font-[Poppins] text-lg">
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className="w-[85%]"
              style={{
                animationDelay: `${index * 0.08}s`,
                animation: menuOpen
                  ? `fadeInUp 0.4s ease ${index * 0.08}s forwards`
                  : "none",
              }}
            >
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
            </li>
          ))}
        </ul>

        {/* Soft glowing bottom line */}
        <div className="h-[2px] w-3/4 mx-auto bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700 rounded-full opacity-50"></div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
