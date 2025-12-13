import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900">
            FAN <span className="text-morocco-green">VOICES</span>
          </h2>
          <p className="text-gray-600 mt-2">See what the Atlas Lions supporters are saying.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col">
              <div className="mb-6 text-morocco-red">
                <Quote size={40} className="opacity-20" />
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-morocco-gold"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Instagram Grid Placeholder */}
        <div className="mt-20">
          <h3 className="text-center font-bold text-xl mb-8 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-gray-300"></span>
            TAG US @ATLASGEAR2025
            <span className="w-8 h-[2px] bg-gray-300"></span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
             {[1, 2, 3, 4, 5, 6].map((i) => (
                 <div key={i} className="aspect-square relative group overflow-hidden bg-gray-200">
                     <img 
                        src={`https://picsum.photos/400/400?random=${i + 10}`} 
                        alt="Instagram post" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                         <span className="font-bold">#DimaMaghrib</span>
                     </div>
                 </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};