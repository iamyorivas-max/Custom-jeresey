import React, { useState } from 'react';
import { SectionIDs, OrderFormState } from '../types';
import { WHATSAPP_NUMBER, PRODUCTS } from '../constants';
import { MessageCircle, Send } from 'lucide-react';

export const OrderSection: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormState>({
    name: '',
    phone: '',
    city: '',
    quantity: 1,
    size: 'M',
    customName: '',
    customNumber: '',
  });

  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0].name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `
*New Order Request - CAN 2025* 🦁
---------------------------
*Name:* ${formData.name}
*Product:* ${selectedProduct}
*Size:* ${formData.size}
*Quantity:* ${formData.quantity}
*City:* ${formData.city}
---------------------------
*Customization:*
Name: ${formData.customName || 'None'}
Number: ${formData.customNumber || 'None'}
---------------------------
I would like to confirm my order.
    `.trim();

    const encodedText = encodeURIComponent(text);
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    window.open(waLink, '_blank');
  };

  return (
    <section id={SectionIDs.ORDER} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-morocco-red to-red-900 rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
          
          {/* Visual Side */}
          <div className="p-10 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <h2 className="text-4xl font-display font-bold mb-6 relative z-10">
              READY TO WEAR THE COLORS?
            </h2>
            <p className="text-red-100 mb-8 text-lg relative z-10">
              Fill out the form to customize your T-shirt. We will redirect you to WhatsApp to confirm the details and payment. No payment needed right now!
            </p>
            
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full"><Send size={16} /></div>
                <span>Direct Chat with Support</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full"><Send size={16} /></div>
                <span>Cash on Delivery Available</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full"><Send size={16} /></div>
                <span>Preview Before Printing</span>
              </li>
            </ul>

             {/* Discount Badge */}
             <div className="bg-morocco-gold text-black inline-block px-6 py-2 rounded-lg font-bold transform -rotate-2 w-max shadow-lg mt-auto">
                LIMITED OFFER: FREE DELIVERY > 500 DH
             </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Select Design</label>
                <div className="grid grid-cols-2 gap-2">
                  {PRODUCTS.map(p => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProduct(p.name)}
                      className={`p-3 text-sm border rounded-lg transition-all ${selectedProduct === p.name ? 'border-morocco-red bg-red-50 text-morocco-red font-bold' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-morocco-red focus:ring-1 focus:ring-morocco-red outline-none transition-colors"
                    placeholder="Yassine Bounou"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone (WhatsApp)</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-morocco-red focus:ring-1 focus:ring-morocco-red outline-none transition-colors"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                  <input 
                    type="text" 
                    name="city" 
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-morocco-red focus:ring-1 focus:ring-morocco-red outline-none transition-colors"
                    placeholder="Casablanca, Rabat..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Size</label>
                  <select 
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-morocco-red outline-none bg-white"
                  >
                    {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-sm font-bold text-morocco-red mb-4 uppercase tracking-wide">Customization (Optional)</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Name on Back</label>
                    <input 
                      type="text" 
                      name="customName" 
                      value={formData.customName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-morocco-green outline-none text-sm"
                      placeholder="e.g. HAKIMI"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Number</label>
                    <input 
                      type="text" 
                      name="customNumber" 
                      value={formData.customNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-morocco-green outline-none text-sm"
                      placeholder="e.g. 2"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={24} className="group-hover:animate-bounce" />
                ORDER VIA WHATSAPP
              </button>
              <p className="text-center text-xs text-gray-400">
                By clicking, you will be redirected to WhatsApp to confirm your order details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};