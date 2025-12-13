import React from 'react';
import { SectionIDs } from '../types';
import { PRODUCTS } from '../constants';
import { Eye } from 'lucide-react';

export const Showcase: React.FC = () => {
  return (
    <section id={SectionIDs.COLLECTION} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold text-gray-900">
              OUR <span className="text-morocco-red">COLLECTION</span>
            </h2>
            <p className="text-gray-600 mt-2">Designed for the true Atlas Lions supporters.</p>
          </div>
          <a href={`#${SectionIDs.ORDER}`} className="hidden md:inline-block text-morocco-red font-bold border-b-2 border-morocco-red pb-1 hover:text-red-800 transition-colors">
            See Pricing & Order &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5] shadow-md">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye size={18} />
                    View Details
                  </button>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-morocco-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-morocco-red transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-display font-bold text-xl text-morocco-green">
                    {product.price} DH
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href={`#${SectionIDs.ORDER}`} className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-bold">
            Start Your Order
          </a>
        </div>
      </div>
    </section>
  );
};