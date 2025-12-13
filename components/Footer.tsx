import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold">ATLAS<span className="text-morocco-red">GEAR</span></h3>
            <p className="text-gray-400 text-sm mt-2">Official Custom Gear for CAN 2025.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-morocco-red transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-morocco-red transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-morocco-red transition-colors"><Twitter /></a>
          </div>
          
          <div className="text-center md:text-right text-gray-500 text-sm">
            <p>&copy; 2024 Atlas Gear Morocco. All rights reserved.</p>
            <p className="mt-1">Designed for Victory.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};