"use client";

import { motion } from "framer-motion";
import { Megaphone, BarChart, Globe, Target } from "lucide-react";

const adServices = [
  {
    icon: <Megaphone className="w-10 h-10 text-orange-400" />,
    title: "Social Media Ads",
    description:
      "We craft data-driven ads for Instagram, Facebook, and TikTok that engage, inspire, and convert your audience effectively.",
  },
  {
    icon: <Target className="w-10 h-10 text-red-400" />,
    title: "Google & YouTube Ads",
    description:
      "Boost visibility and ROI with precision-targeted Google Search and YouTube video campaigns that reach the right audience at the right time.",
  },
  {
    icon: <Globe className="w-10 h-10 text-yellow-400" />,
    title: "Global Brand Campaigns",
    description:
      "Take your brand international with multilingual ad strategies that resonate globally and deliver consistent conversions.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-pink-400" />,
    title: "Performance Analytics",
    description:
      "Our team tracks every click, conversion, and cost to continuously optimize campaigns for peak performance and ROI.",
  },
];

export default function AdsCampaignsPage() {
  return (
    <div className="bg-gradient-to-br from-black via-[#1a0500] to-[#330000] text-white min-h-screen pt-24 pb-20 px-6 sm:px-12 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 text-transparent bg-clip-text">
          Ad Campaigns That Convert Views Into Revenue
        </h1>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl leading-relaxed">
          We don’t just run ads — we build connections. From strategy to
          storytelling, Visionary Creatix ensures every campaign amplifies your
          brand and drives measurable results.
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {adServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a0d00] to-[#331000] p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-orange-400/20 border border-gray-800 transition-all duration-200"
          >
            <div className="flex justify-center mb-5">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 text-center text-white">
              {service.title}
            </h2>
            <p className="text-gray-400 text-center text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          Let’s Create Campaigns That Convert
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          From idea to execution, Visionary Creatix transforms your marketing
          spend into real business growth through innovative, data-backed ad
          strategies.
        </p>
        <motion.a
          href="/#contact"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 text-black font-semibold rounded-full shadow-lg hover:shadow-orange-400/30 transition duration-200"
        >
          Launch My Campaign 🚀
        </motion.a>
      </motion.div>
    </div>
  );
}
