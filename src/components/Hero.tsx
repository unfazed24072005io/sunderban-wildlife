"use client";

import { motion } from "framer-motion";
import { Calendar, Users, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1599312912563-80c03e1d65f3?q=80&w=2070&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover the Mystical{" "}
              <span className="text-green-400">Sunderbans</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Embark on an unforgettable wildlife adventure through the world's
              largest mangrove forest. Spot Royal Bengal Tigers, crocodiles, and
              exotic bird species.
            </p>

            {/* Tour Details */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="text-green-400" />
                <span>3-7 Day Tours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-green-400" />
                <span>Small Groups</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-green-400" />
                <span>West Bengal, India</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg">
                Book Now
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full text-lg font-semibold backdrop-blur-sm transition-colors duration-300 border border-white/30">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;