import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { SectionIDs } from '../types';
import { IMAGES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section 
      id={SectionIDs.HERO}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.HERO_BG}
          alt="Stadium atmosphere"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-white space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-morocco-green/90 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider text-white border border-green-500">
            <Star size={16} fill="currentColor" />
            CAN Morocco 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            UNITE FOR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-morocco-red via-red-500 to-morocco-gold">
              THE GLORY
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
            Support the Atlas Lions in style. Premium custom-made jerseys for fans who bleed Red & Green. Personalize yours today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={`#${SectionIDs.ORDER}`}
              className="bg-morocco-red hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-red-600/40 flex justify-center items-center gap-2"
            >
              CUSTOMIZE NOW
              <ArrowRight size={20} />
            </a>
            <a 
              href={`#${SectionIDs.COLLECTION}`}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white text-lg font-bold px-8 py-4 rounded-full transition-all flex justify-center items-center"
            >
              VIEW COLLECTION
            </a>
          </div>
          
          <div className="pt-8 flex items-center gap-4 text-sm text-gray-400">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-600 overflow-hidden">
                   <img src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} alt="fan" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Trusted by <span className="text-white font-bold">5,000+</span> Moroccan Fans</p>
          </div>
        </div>

        {/* Hero Image / Mockup - Mobile Hidden initially then revealed */}
        <div className="hidden md:block relative h-[600px] w-full">
            {/* Abstract Shapes */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-morocco-red/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-morocco-green/20 rounded-full blur-3xl"></div>
            
            <div className="relative h-full w-full flex justify-center items-center">
                <div className="relative z-10 transform rotate-[-5deg] hover:rotate-0 transition-all duration-700 ease-out hover:scale-105">
                     <img 
                        src={IMAGES.MODEL_MALE} 
                        alt="Morocco Fan Jersey" 
                        className="rounded-2xl shadow-2xl border-4 border-white/10 max-h-[550px] object-cover"
                     />
                     {/* Floating Badge */}
                     <div className="absolute -bottom-6 -right-6 bg-morocco-gold text-black font-bold p-4 rounded-xl shadow-xl flex flex-col items-center border-2 border-white">
                        <span className="text-xs uppercase tracking-wider">Official Quality</span>
                        <span className="text-2xl font-display">PREMIUM</span>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};