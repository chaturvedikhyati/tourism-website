import React from 'react';
import { Landmark, Heart, MapPin, Globe, Compass } from 'lucide-react';
import { DESTINATION_DATA } from '../data/destinationData';

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-sandstone-200 border-t-4 border-terracotta-700 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-earth-700">
          
          {/* Col 1: Destination Title */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-2 text-sandstone-50 font-serif text-xl font-bold">
              <Compass className="w-6 h-6 text-terracotta-500" />
              <span>भीतरगाँव मंदिर (Bhitargaon Temple)</span>
            </div>
            <p className="text-xs text-sandstone-300 max-w-md leading-relaxed">
              1500 वर्ष पुराना भारत का सबसे प्राचीन टेराकोटा ईंट मंदिर। भारतीय पुरातत्व सर्वेक्षण (ASI) द्वारा संरक्षित एक ऐतिहासिक राष्ट्रीय धरोहर।
            </p>
            <div className="text-xs text-ochre-500 font-mono flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{DESTINATION_DATA.coordinates} • Kanpur Nagar, UP</span>
            </div>
          </div>

          {/* Col 2: Navigation links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-serif font-bold text-sandstone-100 uppercase tracking-wider text-sm mb-3">शीघ्र लिंक</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-ochre-500 transition-colors">मुख्य पृष्ठ</a></li>
              <li><a href="#about" className="hover:text-ochre-500 transition-colors">इतिहास व वास्तुकला</a></li>
              <li><a href="#travel-info" className="hover:text-ochre-500 transition-colors">कैसे पहुँचें</a></li>
              <li><a href="#why-visit" className="hover:text-ochre-500 transition-colors">महत्व</a></li>
            </ul>
          </div>

          {/* Col 3: EduFutura Task info */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-serif font-bold text-sandstone-100 uppercase tracking-wider text-sm mb-3">टास्क विवरण</h4>
            <p className="text-sandstone-300 leading-relaxed">
              EduFutura Technologies Pvt. Ltd.<br/>
              Round 2 Task Assessment: AI-Powered Tourism Website
            </p>
            <p className="text-terracotta-400 font-semibold pt-1">
              Option 1: React + Node.js + Gemini AI
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-sandstone-300 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p>© 2026 भीतरगाँव पर्यटन गाइड। All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            भारतीय विरासत के संवर्धन के लिए <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500" /> के साथ निर्मित।
          </p>
        </div>

      </div>
    </footer>
  );
}
