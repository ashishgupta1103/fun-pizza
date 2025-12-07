import React, { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo Section - Recreated from user's image concept (Chef Hat + Fun Pizza Text) */}
          <div className="flex items-center gap-1 cursor-pointer logo-wrapper group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
             
             {/* SVG Chef Hat Icon representing the logo image */}
             <div className="w-16 h-16 relative transform group-hover:rotate-6 transition-transform duration-300">
                 <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                     {/* Hat Top */}
                     <path d="M25 55 C15 55 10 35 30 25 C35 10 60 5 70 20 C80 10 100 10 105 25 C115 35 110 55 100 55" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="4" strokeLinejoin="round"/>
                     {/* Hat Band/Face */}
                     <rect x="28" y="55" width="64" height="28" rx="4" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="4"/>
                     {/* Eyes */}
                     <ellipse cx="50" cy="65" rx="7" ry="9" fill="white" stroke="#1A1A1A" strokeWidth="2.5"/>
                     <circle cx="52" cy="65" r="2.5" fill="#1A1A1A"/>
                     <ellipse cx="72" cy="65" rx="7" ry="9" fill="white" stroke="#1A1A1A" strokeWidth="2.5"/>
                     <circle cx="70" cy="65" r="2.5" fill="#1A1A1A"/>
                     {/* Mouth */}
                     <path d="M48 80 Q60 92 74 80" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none"/>
                     {/* Tongue */}
                     <path d="M58 85 Q62 92 66 85" fill="#EF4444" />
                     {/* Eyebrows */}
                     <path d="M45 55 Q50 50 55 55" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                     <path d="M67 55 Q72 50 77 55" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                 </svg>
             </div>

             {/* Text Logo */}
             <div className="flex flex-col justify-center -space-y-2 mt-2">
               <div className="flex text-3xl font-black tracking-wide filter drop-shadow-sm font-display">
                 <span className="text-[#FF0000] transform -rotate-12 inline-block">F</span>
                 <span className="text-[#FFDE59] transform -rotate-6 inline-block mx-px">U</span>
                 <span className="text-[#4ADE80] transform rotate-6 inline-block">N</span>
               </div>
               <div className="text-2xl font-black text-[#FFDE59] tracking-wider font-display relative" style={{ 
                   textShadow: '3px 3px 0 #1A1A1A',
                   WebkitTextStroke: '1.5px #1A1A1A'
               }}>
                 PIZZA
               </div>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="font-bold text-gray-600 hover:text-brand-purple transition">Menu</a>
            <a href="#promo" className="font-bold text-gray-600 hover:text-brand-purple transition">Offers</a>
            <a href="#lab" className="font-bold text-gray-600 hover:text-brand-purple transition">Flavor Lab</a>
            
            <button 
              onClick={onCartClick}
              className="relative bg-brand-purple text-white p-3 rounded-2xl hover:bg-purple-600 transition shadow-md group"
            >
              <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-yellow text-brand-dark text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={onCartClick}
              className="relative text-brand-dark p-2"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-purple text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark">
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-xl text-base font-bold text-gray-700 hover:bg-purple-50 hover:text-brand-purple">Menu</a>
            <a href="#promo" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-xl text-base font-bold text-gray-700 hover:bg-purple-50 hover:text-brand-purple">Offers</a>
            <a href="#lab" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-xl text-base font-bold text-gray-700 hover:bg-purple-50 hover:text-brand-purple">Flavor Lab</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;