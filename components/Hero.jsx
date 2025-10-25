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
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black text-white"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Glowing Moon Animation */}
      <motion.div
        initial={{ scale: 0.05, opacity: 0.8 }}
        animate={
          showMoon
            ? {
                scale: 1,
                opacity: 1,
                width: "460px",
                height: "460px",
                y: -110,
              }
            : {}
        }
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="absolute rounded-full shadow-[0_0_120px_rgba(0,212,255,0.9)] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700
          md:w-[460px] md:h-[460px]
          sm:w-[300px] sm:h-[300px]  /* smaller moon on mobile */
        "
      ></motion.div>

      {/* Stars Background */}
      {[...Array(35)].map((_, i) => (
        <span
          key={i}
          className="absolute w-[3px] h-[3px] bg-cyan-300 rounded-full opacity-70 animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></span>
      ))}

      {/* Text & CTA */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex flex-col items-center text-center z-10 px-4"
        >
          <h1 className="mainHeading text-[3.2rem] sm:text-[4.2rem] md:text-[5.4rem] font-black leading-tight tracking-tight bg-gradient-to-r from-[#00f0ff] via-[#00d4ff] to-[#009bff] bg-clip-text text-transparent drop-shadow-[0_0_55px_rgba(0,240,255,0.9)]">
            Visionary Creatix
          </h1>

          <p className="mainPara mt-4 text-[1.6rem] sm:text-xl md:text-2xl text-gray-100 font-semibold tracking-wide max-w-[650px] leading-relaxed drop-shadow-[0_0_35px_rgba(0,220,255,0.7)] font-[Playfair Display]">
            Crafting Digital Experiences that Inspire & Convert
          </p>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-gradient-to-r from-[#00c6ff] via-[#00aaff] to-[#0066ff] text-white text-lg sm:text-xl font-extrabold px-10 py-4 rounded-full shadow-[0_0_35px_rgba(0,200,255,0.9)] hover:shadow-[0_0_55px_rgba(0,150,255,1)] transition-all duration-300 hover:opacity-95 animate-glowPulse"
          >
            Let’s Build Something Great
          </motion.a>
        </motion.div>
      )}

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00111a]/40 to-black opacity-80"></div>

      {/* Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@500;700&display=swap");

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
          animation: twinkle 3s infinite ease-in-out;
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
          animation: glowPulse 2.2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
