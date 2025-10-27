"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showMoon, setShowMoon] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMoon(true), 300);
    const timer2 = setTimeout(() => setShowText(true), 1200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center w-full min-h-screen overflow-hidden bg-black text-white pt-[80px] sm:pt-[100px]"
    >
      {/* Moon Animation */}
      <motion.div
        initial={{ scale: 0.05, opacity: 0.8 }}
        animate={
          showMoon
            ? {
                scale: 1,
                opacity: 1,
                width: "80vw",
                height: "80vw",
                maxWidth: "460px",
                maxHeight: "460px",
                y: 0,
              }
            : {}
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 shadow-[0_0_100px_rgba(0,212,255,0.8)]"
      ></motion.div>

      {/* Stars */}
      {[...Array(35)].map((_, i) => (
        <span
          key={i}
          className="absolute w-[2px] h-[2px] bg-cyan-300 rounded-full opacity-70 animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></span>
      ))}

      {/* Text + CTA */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center text-center z-10 px-4"
        >
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-black leading-tight tracking-tight bg-gradient-to-r from-[#00f0ff] via-[#00d4ff] to-[#009bff] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(0,240,255,0.9)]">
            Visionary Creatix
          </h1>

          <p className="mt-4 text-[1.3rem] sm:text-xl md:text-2xl text-gray-100 font-semibold tracking-wide max-w-[650px] leading-relaxed drop-shadow-[0_0_30px_rgba(0,220,255,0.7)] font-[Playfair Display]">
            Crafting Digital Experiences that Inspire & Convert
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-gradient-to-r from-[#00c6ff] via-[#00aaff] to-[#0066ff] text-white text-lg sm:text-xl font-extrabold px-10 py-4 rounded-full shadow-[0_0_35px_rgba(0,200,255,0.9)] hover:shadow-[0_0_55px_rgba(0,150,255,1)] transition-all duration-300 hover:opacity-95 animate-glowPulse"
          >
            Start Building 
          </motion.a>
        </motion.div>
      )}

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00111a]/40 to-black opacity-80"></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
        .animate-twinkle {
          animation: twinkle 1.5s infinite ease-in-out;
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 25px rgba(0, 180, 255, 0.7);
          }
          50% {
            box-shadow: 0 0 55px rgba(0, 220, 255, 0.95);
          }
        }
        .animate-glowPulse {
          animation: glowPulse 1.8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
