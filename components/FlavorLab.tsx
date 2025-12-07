import React, { useState } from 'react';
import { generatePizzaConcept } from '../services/geminiService';
import { Sparkles, ChefHat, RefreshCw, Loader2 } from 'lucide-react';
import { AiPizzaConcept } from '../types';

const INGREDIENTS = [
  '🍄 Mushrooms', '🌶️ Jalapenos', '🍍 Pineapple', '🧀 Extra Cheese', 
  '🐔 Chicken', '🌿 Basil', '🧄 Garlic', '🧅 Onions', 
  '🌽 Corn', '🥓 Bacon', '🍯 Honey', '🌶️ Hot Sauce'
];

const FlavorLab: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [concept, setConcept] = useState<AiPizzaConcept | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleIngredient = (ing: string) => {
    if (selectedIngredients.includes(ing)) {
      setSelectedIngredients(selectedIngredients.filter(i => i !== ing));
    } else {
      if (selectedIngredients.length < 3) {
        setSelectedIngredients([...selectedIngredients, ing]);
      }
    }
  };

  const handleGenerate = async () => {
    if (selectedIngredients.length === 0) return;
    setLoading(true);
    setConcept(null);
    
    // Simulate slight delay for effect if API is too fast, or just standard await
    const result = await generatePizzaConcept(selectedIngredients);
    setConcept(result);
    setLoading(false);
  };

  return (
    <section id="lab" className="py-20 bg-brand-purple text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
             <ChefHat size={32} className="text-brand-yellow mr-2" />
             <span className="font-bold text-brand-yellow tracking-wider">POWERED BY AI CHEF LUIGI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">The Flavor Lab</h2>
          <p className="text-xl text-purple-100">
            Pick up to 3 ingredients and let our AI Chef invent a crazy special just for you!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {INGREDIENTS.map((ing) => (
              <button
                key={ing}
                onClick={() => toggleIngredient(ing)}
                className={`p-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                  selectedIngredients.includes(ing)
                    ? 'bg-brand-yellow text-brand-dark shadow-lg scale-105'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                {ing}
              </button>
            ))}
          </div>

          <div className="flex justify-center mb-10">
            <button
              onClick={handleGenerate}
              disabled={selectedIngredients.length === 0 || loading}
              className={`px-8 py-4 rounded-2xl font-black text-lg flex items-center gap-3 shadow-xl transition-all ${
                selectedIngredients.length === 0
                  ? 'bg-gray-500 cursor-not-allowed opacity-50'
                  : 'bg-brand-orange hover:bg-orange-600 hover:-translate-y-1'
              }`}
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles />}
              {loading ? 'Cooking up magic...' : 'Invent My Pizza!'}
            </button>
          </div>

          {concept && (
            <div className="bg-white text-brand-dark rounded-2xl p-6 md:p-8 animate-[fadeIn_0.5s_ease-out]">
              <div className="border-b-2 border-dashed border-gray-200 pb-4 mb-4 flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-black text-brand-purple mb-2">{concept.name}</h3>
                    <div className="flex gap-2 text-sm text-gray-500 font-bold uppercase tracking-wider">
                        {selectedIngredients.map(i => <span key={i} className="bg-gray-100 px-2 py-1 rounded">{i}</span>)}
                    </div>
                  </div>
                  <div className="bg-brand-yellow text-brand-dark font-bold px-3 py-1 rounded rotate-3 shadow-sm">
                      SPECIAL
                  </div>
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">"{concept.description}"</p>
              
              <div className="bg-brand-purple/5 p-4 rounded-xl border border-brand-purple/10">
                <h4 className="font-bold text-brand-purple mb-1 text-sm flex items-center gap-2">
                    <ChefHat size={16}/> Luigi's Fun Fact:
                </h4>
                <p className="text-sm text-gray-600">{concept.funFact}</p>
              </div>

              <div className="mt-6 text-center">
                  <button className="text-brand-orange font-bold text-sm hover:underline flex items-center justify-center gap-1 w-full" onClick={() => setConcept(null)}>
                      <RefreshCw size={14}/> Try another combo
                  </button>
              </div>
            </div>
          )}
          
          {!concept && !loading && (
             <div className="text-center text-white/40 italic text-sm">
                Waiting for your ingredients...
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FlavorLab;
