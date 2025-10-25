"use client";
import { motion } from "framer-motion";

export default function About() {
  const services = [
    { name: "Web Development", color: "from-[#00f0ff] via-[#00b8ff] to-[#007bff]" },
    { name: "SEO Optimization", color: "from-[#ff7de1] via-[#ff4da6] to-[#ff007b]" },
    { name: "Graphic Designing", color: "from-[#00ffea] via-[#00b8ff] to-[#005eff]" },
    { name: "Ads Campaign", color: "from-[#ffcc00] via-[#ff9900] to-[#ff5500]" },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-6 md:px-20 py-20 overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Decorative background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full blur-3xl opacity-30"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-25"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 140, ease: "linear" }}
      ></motion.div>

      {/* Left Text Column */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-1 mb-12 md:mb-0 md:mr-12"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#00f0ff] via-[#00b8ff] to-[#007bff] bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(0,212,255,0.8)] font-[Playfair Display] mb-6">
          Our Services
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed font-[Inter] drop-shadow-[0_0_25px_rgba(0,200,255,0.4)]">
          We provide premium digital solutions to grow your business. From building stunning websites to running effective ads campaigns, our team ensures results that impress and convert.
        </p>
      </motion.div>

      {/* Right Services Column */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotate: 1, boxShadow: "0 0 50px rgba(0,255,255,0.7)" }}
            className={`p-8 rounded-3xl shadow-[0_0_35px_rgba(0,180,255,0.5)] bg-gradient-to-r ${service.color} text-white font-bold text-lg sm:text-xl text-center cursor-pointer transition-all duration-300`}
          >
            {service.name}
          </motion.div>
        ))}
      </motion.div>

      {/* Styles */}
      <style jsx>{`
        section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0,255,255,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
