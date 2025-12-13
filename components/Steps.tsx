import React from 'react';
import { Shirt, PenTool, Truck, Palette } from 'lucide-react';
import { SectionIDs } from '../types';

export const Steps: React.FC = () => {
  const steps = [
    {
      icon: <Shirt className="w-10 h-10 text-morocco-red" />,
      title: "Choose Your Style",
      desc: "Select from Home, Away, or Fan edition jerseys designed for comfort and style."
    },
    {
      icon: <PenTool className="w-10 h-10 text-morocco-green" />,
      title: "Personalize It",
      desc: "Add your name, favorite number, or custom text on the back. Make it unique."
    },
    {
      icon: <Palette className="w-10 h-10 text-morocco-gold" />,
      title: "Add Logos",
      desc: "Option to add custom logos for corporate groups or local football teams."
    },
    {
      icon: <Truck className="w-10 h-10 text-morocco-black" />,
      title: "Fast Delivery",
      desc: "We deliver across all cities in Morocco within 48-72 hours."
    }
  ];

  return (
    <section id={SectionIDs.CUSTOMIZE} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-morocco-red font-bold uppercase tracking-widest text-sm">How It Works</span>
          <h2 className="text-4xl font-display font-bold text-gray-900 mt-2">
            CREATE YOUR <span className="text-morocco-green">LEGACY</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get ready for the stadium in 4 simple steps. We make customization easy and accessible for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-6xl font-bold text-gray-400 select-none group-hover:opacity-20 transition-opacity">
                {index + 1}
              </div>
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};