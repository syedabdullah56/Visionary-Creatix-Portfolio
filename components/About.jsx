"use client";
import { motion } from "framer-motion";
import { Code2, Search, Palette, Megaphone } from "lucide-react";

export default function About() {
  const services = [
    {
      icon: <Code2 size={48} className="text-cyan-400" />,
      title: "Web Development",
      desc: "We build modern, responsive, and high-performing websites that elevate your online presence.",
    },
    {
      icon: <Search size={48} className="text-cyan-400" />,
      title: "SEO Optimization",
      desc: "Boost your visibility with strategic SEO techniques that bring you to the top of search results.",
    },
    {
      icon: <Palette size={48} className="text-cyan-400" />,
      title: "Graphic Designing",
      desc: "Stunning designs that capture attention and communicate your brand’s story with impact.",
    },
    {
      icon: <Megaphone size={48} className="text-cyan-400" />,
      title: "Ads Campaigns",
      desc: "We design and run powerful ad campaigns that convert viewers into loyal customers.",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-b from-[#000814] via-[#020f25] to-[#000814]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-8"
      >
        About Visionary Creatix
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-3xl text-gray-300 text-lg sm:text-xl leading-relaxed mb-16"
      >
        We are a modern digital agency helping brands grow through creative design, impactful web
        experiences, and data-driven marketing. Our mission is simple —{" "}
        <span className="text-cyan-400 font-semibold">turn your vision into reality.</span>
      </motion.p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.07 }}
            className="group relative bg-[#0b1328]/70 backdrop-blur-md rounded-2xl border border-blue-900/50 hover:border-cyan-400/60 p-8 text-center shadow-[0_0_20px_rgba(0,200,255,0.1)] hover:shadow-[0_0_30px_rgba(0,200,255,0.3)] transition-all duration-500"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">{service.desc}</p>

            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 blur-xl"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
