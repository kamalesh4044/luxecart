"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-16 glass rounded-2xl z-50 px-8 flex items-center justify-between"
    >
      <Link href="/" className="text-xl font-bold tracking-tight">
        Luxe<span className="font-light text-secondary">Cart</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
        <Link href="#" className="hover:text-primary transition-colors">Shop</Link>
        <Link href="#" className="hover:text-primary transition-colors">Collections</Link>
        <Link href="#" className="hover:text-primary transition-colors">About</Link>
      </div>

      <div className="flex items-center gap-5">
        <Search className="w-5 h-5 text-secondary cursor-pointer hover:text-primary transition-colors" />
        <div className="relative cursor-pointer">
          <ShoppingBag className="w-5 h-5 text-secondary hover:text-primary transition-colors" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">0</span>
        </div>
        <Menu className="w-5 h-5 md:hidden text-secondary" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
