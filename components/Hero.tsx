import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="promo" className="relative bg-brand-orange overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple text-white rounded-full font-bold text-sm mb-6 shadow-lg animate-bounce">
              <Sparkles size={16} className="text-brand-yellow" />
              LIMITED TIME OFFER!
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4 drop-shadow-md">
              BUY ONE <br/>
              <span className="text-brand-yellow">GET ONE FREE!</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-8">
              Pocket Pizza Offer <br/>
              <span className="inline-block bg-white text-brand-orange px-3 py-1 rounded-lg mt-2 text-xl md:text-2xl transform -rotate-2">
                Starting @ ₹59
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#menu" className="px-8 py-4 bg-brand-dark text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 shadow-xl hover:translate-y-[-2px]">
                Order Now <ArrowRight size={20} />
              </a>
              <a href="#lab" className="px-8 py-4 bg-white text-brand-orange rounded-2xl font-bold text-lg hover:bg-gray-50 transition shadow-xl hover:translate-y-[-2px]">
                Create Custom Pizza
              </a>
            </div>
          </div>

          {/* Image Content - Simulating the provided promo image layout */}
          <div className="flex-1 relative z-10 w-full max-w-lg">
             <div className="relative">
                {/* Main visual container */}
                <div className="bg-orange-400 rounded-3xl p-6 shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition duration-500">
                    <div className="bg-brand-orange rounded-2xl p-6 relative overflow-hidden h-80 sm:h-96 flex flex-col items-center justify-center">
                        {/* Mystery Box Representation */}
                        <div className="absolute top-4 left-4 w-24 h-24 bg-orange-600 rounded-xl flex items-center justify-center text-4xl text-orange-200 font-black shadow-inner transform -rotate-12 border-2 border-orange-300">
                            ?
                        </div>
                        
                        {/* Pizza / Burger Hybrid Image (Placeholder) */}
                        <img 
                            src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop" 
                            alt="Pocket Pizza" 
                            className="w-48 h-48 object-cover rounded-full shadow-2xl border-4 border-white z-10 animate-[pulse_3s_ease-in-out_infinite]"
                        />

                        {/* Coke Bottle (Visual Rep) */}
                        <div className="absolute bottom-4 right-4 h-32 w-12 bg-red-800 rounded-t-lg border-2 border-red-400 opacity-90 shadow-xl flex items-center justify-center text-white font-serif text-xs vertical-rl writing-mode-vertical">
                           Cola
                        </div>

                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg">
                           <span className="font-black text-brand-dark">FUN PIZZA</span>
                        </div>
                    </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-brand-yellow text-brand-dark font-black px-4 py-6 rounded-full w-24 h-24 flex items-center justify-center text-center transform rotate-12 shadow-xl border-4 border-white">
                    FREE<br/>PIZZA
                </div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16 md:h-24 text-gray-50" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
