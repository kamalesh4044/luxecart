"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Future of Sound
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            Aura <span className="font-light italic text-secondary">Studio</span>
          </h1>
          <p className="text-lg text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
            Immerse yourself in high-fidelity audio. Designed for those who demand absolute clarity and minimalist aesthetics.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:scale-105 transition-transform active:scale-95">
              Explore Now
            </button>
            <button className="px-8 py-4 bg-transparent border border-black/10 rounded-full font-medium hover:bg-black/5 transition-colors">
              View Specs
            </button>
          </div>
        </motion.div>
      </div>

      {/* Placeholder for 3D Model */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 w-full h-[60vh] flex items-center justify-center pointer-events-none"
      >
        <div className="w-[400px] h-[400px] bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
