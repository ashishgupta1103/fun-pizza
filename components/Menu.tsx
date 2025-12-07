import React from 'react';
import { Plus } from 'lucide-react';
import { PizzaItem } from '../types';

const PIZZAS: PizzaItem[] = [
  {
    id: '1',
    name: 'Classic Pocket',
    description: 'Golden crust filled with mozzarella and signature tomato sauce.',
    price: 59,
    category: 'pocket',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60',
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Spicy Paneer Pocket',
    description: 'Spicy marinated paneer cubes with onions and capsicum inside.',
    price: 89,
    category: 'pocket',
    image: 'https://images.unsplash.com/photo-1593560708920-63219416428e?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: '3',
    name: 'Chicken Fiesta',
    description: 'Loaded with grilled chicken, jalapenos, and extra cheese.',
    price: 119,
    category: 'pocket',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: '4',
    name: 'Margherita Supreme',
    description: 'Classic round pizza with fresh basil and cherry tomatoes.',
    price: 199,
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: '5',
    name: 'Double Cheese Burst',
    description: 'Overloaded with liquid cheese and mozzarella blend.',
    price: 249,
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60',
    badge: 'Must Try'
  },
  {
    id: '6',
    name: 'Choco-Lava Pocket',
    description: 'Sweet pocket filled with molten dark chocolate.',
    price: 99,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&auto=format&fit=crop&q=60'
  }
];

interface MenuProps {
  addToCart: (item: PizzaItem) => void;
}

const Menu: React.FC<MenuProps> = ({ addToCart }) => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-dark mb-4">Our Delicious Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From our signature Pocket Pizzas to classic favorites. Grab the BOGO offer on all Pocket Pizzas!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PIZZAS.map((pizza) => (
            <div key={pizza.id} className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition duration-300 group border border-gray-100">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <img 
                  src={pizza.image} 
                  alt={pizza.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                {pizza.badge && (
                  <div className="absolute top-3 left-3 bg-brand-yellow text-brand-dark px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                    {pizza.badge}
                  </div>
                )}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg font-black text-brand-dark shadow-sm">
                  ₹{pizza.price}
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-xl font-bold text-brand-dark mb-2 font-display">{pizza.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{pizza.description}</p>
                
                <button 
                  onClick={() => addToCart(pizza)}
                  className="w-full py-3 bg-brand-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-orange transition group-hover:-translate-y-1"
                >
                  <Plus size={18} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
