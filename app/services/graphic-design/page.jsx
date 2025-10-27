"use client";

import { motion } from "framer-motion";
import { Paintbrush, Palette, PenTool, Image } from "lucide-react";

const services = [
  {
    icon: <Paintbrush className="w-10 h-10 text-pink-500" />,
    title: "Logo Design",
    description:
      "Crafting timeless, memorable logos that represent your brand's essence with creativity and precision.",
  },
  {
    icon: <Palette className="w-10 h-10 text-indigo-500" />,
    title: "Brand Identity",
    description:
      "Complete branding solutions including color palettes, typography, and design systems for a cohesive image.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-purple-500" />,
    title: "Social Media Creatives",
    description:
      "Eye-catching visuals designed to drive engagement, consistency, and a lasting impression across all platforms.",
  },
  {
    icon: <Image className="w-10 h-10 text-orange-500" />,
    title: "Print & Marketing Design",
    description:
      "Posters, brochures, and packaging that combine creativity with marketing psychology for real impact.",
  },
];

export default function GraphicDesignPage() {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white min-h-screen pt-24 pb-20 px-6 sm:px-12 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Stunning Designs That Speak Volumes
        </h1>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl leading-relaxed">
          We bring imagination to life through design. From logos to complete
          branding systems, our team ensures your visual identity stands out in
          every pixel.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-700 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 text-center text-white">
              {service.title}
            </h2>
            <p className="text-gray-400 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-24"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          Let's Design Something Extraordinary
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Whether you're a startup or an established brand, our creative team
          ensures your visuals communicate powerfully and beautifully.
        </p>
        <motion.a
          href="/#contact"
          whileHover={{ scale: 1.1 }}
          className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/40 transition duration-300"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </div>
  );
}
