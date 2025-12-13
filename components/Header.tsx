import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { SectionIDs } from '../types';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: 'Customize', href: `#${SectionIDs.CUSTOMIZE}` },
    { label: 'Collection', href: `#${SectionIDs.COLLECTION}` },
    { label: 'Why Us', href: `#${SectionIDs.FEATURES}` },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
             <div className="bg-morocco-red text-white p-1 rounded font-bold text-xl border-2 border-morocco-green group-hover:bg-morocco-green group-hover:border-morocco-red transition-colors">
                MA
             </div>
             <span className="text-2xl font-display font-bold text-morocco-black tracking-tighter">
               ATLAS<span className="text-morocco-red">GEAR</span>
             </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-gray-700 font-semibold hover:text-morocco-red transition-colors uppercase text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a 
              href={`#${SectionIDs.ORDER}`}
              className="bg-morocco-red text-white px-6 py-2 rounded-full font-bold hover:bg-red-800 transition-all shadow-lg hover:shadow-red-500/30 flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              ORDER NOW
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden fixed top-[72px] left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-lg font-semibold text-gray-800 py-2 border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}
          <a 
            href={`#${SectionIDs.ORDER}`}
            onClick={closeMenu}
            className="bg-morocco-red text-white text-center py-3 rounded-lg font-bold mt-2"
          >
            ORDER YOUR JERSEY
          </a>
        </div>
      </div>
    </header>
  );
};