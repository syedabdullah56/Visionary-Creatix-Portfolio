"use client";
import { motion } from "framer-motion";
import { Code2, Search, Palette, Megaphone,Bot } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <Code2 size={48} className="text-cyan-400" />,
      title: "Web Development",
      desc: "Modern, responsive, and high-performance websites that elevate your digital presence.",
      link: "/services/web-development",
    },
    {
      icon: <Search size={48} className="text-cyan-400" />,
      title: "SEO Optimization",
      desc: "Boost your rankings and visibility through strategic, data-driven SEO practices.",
      link: "/services/seo",
    },
    {
      icon: <Palette size={48} className="text-cyan-400" />,
      title: "Graphic Designing",
      desc: "Creative, aesthetic, and impactful designs that define your brand identity.",
      link: "/services/graphic-design",
    },
    {
    icon: <Bot size={48} className="text-cyan-400" />,
    title: "AI Services",
    desc: "AI agents, intelligent chatbots, predictive analytics, and custom AI solutions.",
    link: "/services/ai-services",
    },
    {
      icon: <Megaphone size={48} className="text-cyan-400" />,
      title: "Ad Campaigns",
      desc: "Targeted ad campaigns that maximize ROI and convert viewers into loyal customers.",
      link: "/services/ads-campaigns",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 py-24 bg-gradient-to-b from-[#000814] via-[#00172f] to-[#000814] overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-8"
      >
        Our Services
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl text-gray-300 text-lg sm:text-xl leading-relaxed mb-16"
      >
        From stunning websites to impactful digital campaigns — we provide all the tools to help your brand grow online.
      </motion.p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
        {services.map((service, index) => (
          <Link key={service.title} href={service.link}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-[#0b1328]/70 backdrop-blur-md rounded-2xl border border-blue-900/50 hover:border-cyan-400/60 p-8 text-center shadow-[0_0_20px_rgba(0,200,255,0.1)] hover:shadow-[0_0_25px_rgba(0,200,255,0.25)] transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 blur-xl"></div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
