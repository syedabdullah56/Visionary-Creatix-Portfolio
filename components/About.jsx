"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 py-24 bg-gradient-to-b from-[#000814] via-[#021226] to-[#000814] overflow-hidden"
    >
      {/* Floating glow behind */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.15),transparent_60%)] blur-3xl"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-8 drop-shadow-[0_0_20px_rgba(0,200,255,0.5)]"
      >
        About Visionary Creatix
      </motion.h2>

      {/* Story / Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl text-gray-300 text-lg sm:text-xl leading-relaxed mb-16"
      >
        Founded in <span className="text-cyan-400 font-semibold">2023</span>, Visionary Creatix began with a mission to redefine how digital experiences are built.
        We craft brands, websites, and campaigns that combine creativity and strategy to make a real-world impact.
        <br /> <br />
        Our goal is simple — to empower businesses and creators to rise above the noise with
        <span className="text-cyan-400 font-semibold"> innovation, design excellence, and authenticity.</span>
      </motion.p>

      {/* Mission, Vision, Goals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl text-gray-300">
        {[
          {
            title: "Our Mission",
            desc: "To bridge creativity and technology — crafting experiences that connect, inspire, and convert.",
          },
          {
            title: "Our Vision",
            desc: "To become a global name in digital innovation — where every pixel tells a story that matters.",
          },
          {
            title: "Our Goals",
            desc: "To build long-term partnerships, push design boundaries, and help brands thrive online with measurable results.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-[#0b1328]/70 backdrop-blur-md p-8 rounded-2xl border border-blue-900/50 hover:border-cyan-400/60 shadow-[0_0_20px_rgba(0,200,255,0.1)] hover:shadow-[0_0_35px_rgba(0,200,255,0.3)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
              {item.title}
            </h3>
            <p className="leading-relaxed text-gray-300">{item.desc}</p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 blur-xl"></div>
          </motion.div>
        ))}
      </div>

      {/* CTA (if needed later) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-16"
      ></motion.div>
    </section>
  );
}
