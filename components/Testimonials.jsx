"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const testimonials = [
    {
      name: "Sarah Williams",
      role: "Startup Founder",
      text: "Visionary Creatix helped us build a website that truly represents our brand. Their creativity and attention to detail are unmatched!",
    },
    {
      name: "Michael Chen",
      role: "E-commerce Owner",
      text: "Our sales doubled after their SEO optimization. Their results are measurable and their communication is top-notch.",
    },
    {
      name: "Ayesha Khan",
      role: "Digital Marketer",
      text: "The UI/UX design was stunning! Their team combines art with technology perfectly.",
    },
    {
      name: "David Smith",
      role: "Software Consultant",
      text: "They developed a blazing-fast web app with pixel-perfect design. Truly professionals!",
    },
    {
      name: "Emma Johnson",
      role: "Brand Manager",
      text: "Our ads campaign was handled beautifully. They know how to convert visitors into customers.",
    },
    {
      name: "Ali Raza",
      role: "Entrepreneur",
      text: "One of the best agencies I’ve ever worked with. Their passion for excellence is inspiring.",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative w-full py-20 px-6 md:px-16 bg-gradient-to-b from-[#000814] via-[#02112b] to-[#000] text-white overflow-hidden"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent"
      >
        What Our Clients Say
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#031b3d]/70 to-[#001527]/60 backdrop-blur-lg border border-cyan-600/30 shadow-[0_0_25px_rgba(0,180,255,0.15)] hover:shadow-[0_0_35px_rgba(0,200,255,0.25)] transition-all duration-250"
          >
            <p className="text-gray-200 text-base md:text-lg leading-relaxed italic mb-6">
              “{t.text}”
            </p>
            <div>
              <h3 className="text-xl font-bold text-cyan-400">{t.name}</h3>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Glow Orbs */}
      <div className="absolute top-20 left-20 w-28 h-28 bg-cyan-500/15 blur-[90px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-blue-700/20 blur-[100px] rounded-full"></div>
    </section>
  );
}
