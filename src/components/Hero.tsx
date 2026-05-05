"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [activeColor, setActiveColor] = React.useState('#3b82f6');
  const colors = [
    { name: 'Azure', hex: '#3b82f6' },
    { name: 'Noir', hex: '#000000' },
    { name: 'Rose', hex: '#ec4899' },
    { name: 'Emerald', hex: '#10b981' }
  ];

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
          
          <div className="flex flex-col items-center gap-8 mb-10">
            <p className="text-lg text-secondary max-w-xl leading-relaxed">
              Experience absolute clarity. Customize your soundscape with our signature ambient glow technology.
            </p>
            
            {/* 3D Color Configurator */}
            <div className="flex items-center gap-3 p-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
              {colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setActiveColor(c.hex)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${activeColor === c.hex ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:scale-105 transition-transform active:scale-95 shadow-xl">
              Buy Now — $399
            </button>
            <button className="px-8 py-4 bg-transparent border border-black/10 rounded-full font-medium hover:bg-black/5 transition-colors">
              Compare Models
            </button>
          </div>
        </motion.div>
      </div>

      {/* Interactive 3D Glow (Reactive to State) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 w-full h-[60vh] flex items-center justify-center pointer-events-none"
      >
        <motion.div 
          animate={{ backgroundColor: activeColor }}
          transition={{ duration: 0.8 }}
          className="w-[500px] h-[500px] rounded-full blur-[140px] opacity-30" 
        />
      </motion.div>
    </section>
  );
};

export default Hero;
