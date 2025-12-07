import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import FlavorLab from './components/FlavorLab';
import Footer from './components/Footer';
import { PizzaItem, CartItem } from './types';
import { X, Trash2 } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: PizzaItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar cartCount={cart.reduce((a, b) => a + b.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <Hero />
        <Menu addToCart={addToCart} />
        <FlavorLab />
      </main>

      <Footer />

      {/* Cart Sidebar / Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-brand-orange text-white">
              <h2 className="text-2xl font-black">Your Order</h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                   <div className="text-6xl">🍕</div>
                   <p className="font-bold text-lg">Your cart is empty!</p>
                   <button onClick={() => setIsCartOpen(false)} className="text-brand-orange font-bold hover:underline">Start Ordering</button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h4 className="font-bold text-brand-dark">{item.name}</h4>
                      <p className="text-sm text-gray-500">₹{item.price} x {item.quantity}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 font-bold">Total</span>
                  <span className="text-3xl font-black text-brand-dark">₹{cartTotal}</span>
                </div>
                <button 
                  className="w-full py-4 bg-brand-purple text-white rounded-xl font-bold text-lg hover:bg-purple-800 transition shadow-lg"
                  onClick={() => alert('Order Placed! (This is a demo)')}
                >
                  Checkout Now
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
