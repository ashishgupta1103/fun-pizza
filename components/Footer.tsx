import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-gray-800 pb-8">
            <div>
                <h3 className="text-2xl font-black text-white mb-4">FUN PIZZA</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Bringing joy to your tastebuds with our signature Pocket Pizzas and wacky AI creations. Happiness starting @ ₹59.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4 text-brand-orange">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#menu" className="hover:text-white transition">Menu</a></li>
                    <li><a href="#promo" className="hover:text-white transition">Offers</a></li>
                    <li><a href="#lab" className="hover:text-white transition">Flavor Lab</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4 text-brand-orange">Connect</h4>
                <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-purple transition">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-purple transition">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-purple transition">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </div>
        <div className="text-center text-gray-600 text-xs">
            © {new Date().getFullYear()} Fun Pizza Cafe. All rights reserved. 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
