import React from 'react';
import { SectionIDs } from '../types';
import { CheckCircle, ShieldCheck, Zap, Heart } from 'lucide-react';
import { IMAGES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id={SectionIDs.FEATURES} className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-morocco-red rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-morocco-green rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl font-display font-bold mb-4">
                            WHY CHOOSE <span className="text-morocco-gold">ATLAS GEAR?</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            We don't just sell t-shirts; we sell the spirit of the game. Designed by fans, for fans.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-morocco-red/50 transition-colors">
                            <ShieldCheck className="text-morocco-green mb-4" size={32} />
                            <h4 className="font-bold text-xl mb-2">Premium Quality</h4>
                            <p className="text-gray-400 text-sm">Durable fabric that withstands chants, cheers, and celebrations.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-morocco-red/50 transition-colors">
                            <Zap className="text-morocco-gold mb-4" size={32} />
                            <h4 className="font-bold text-xl mb-2">Fast Production</h4>
                            <p className="text-gray-400 text-sm">Ready in 24-48 hours. Don't miss the next big match.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-morocco-red/50 transition-colors">
                            <Heart className="text-morocco-red mb-4" size={32} />
                            <h4 className="font-bold text-xl mb-2">Made with Love</h4>
                            <p className="text-gray-400 text-sm">Locally produced in Morocco supporting local artisans.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-morocco-red/50 transition-colors">
                            <CheckCircle className="text-blue-400 mb-4" size={32} />
                            <h4 className="font-bold text-xl mb-2">Bulk Orders</h4>
                            <p className="text-gray-400 text-sm">Special discounts for fan clubs, companies, and big families.</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <img 
                            src={IMAGES.FABRIC_DETAIL} 
                            alt="Fabric Quality" 
                            className="rounded-lg shadow-2xl transform translate-y-8"
                        />
                        <img 
                            src={IMAGES.GROUP_CELEBRATION} 
                            alt="Happy Fans" 
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                    {/* Decorative Frame */}
                    <div className="absolute inset-0 border-4 border-morocco-gold/20 transform translate-x-4 translate-y-4 -z-10 rounded-xl"></div>
                </div>
            </div>
        </div>
    </section>
  );
};