import React from 'react';
import { Compass, Mic, MapPin } from 'lucide-react';
import { DESTINATION_DATA } from '../data/destinationData';

export default function Navbar({ onOpenVoiceAssistant }) {
  return (
    <header className="sticky top-0 z-40 bg-sandstone-50 border-b border-sandstone-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Destination Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-terracotta-700 text-sandstone-50 flex items-center justify-center shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold font-serif text-earth-900 tracking-tight block">
                भीतरगाँव मंदिर
              </span>
              <span className="text-xs text-terracotta-700 font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3" /> कानपुर, उत्तर प्रदेश
              </span>
            </div>
          </div>

          {/* Nav Navigation links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-earth-800">
            <a href="#hero" className="hover:text-terracotta-700 transition-colors">मुख्य</a>
            <a href="#about" className="hover:text-terracotta-700 transition-colors">इतिहास एवं कला</a>
            <a href="#travel-info" className="hover:text-terracotta-700 transition-colors">यात्रा मार्गदर्शिका</a>
            <a href="#why-visit" className="hover:text-terracotta-700 transition-colors">क्यों देखें?</a>
          </nav>

          {/* AI Voice Assistant Call to Action */}
          <button
            onClick={onOpenVoiceAssistant}
            className="flex items-center space-x-2 bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 px-4 py-2.5 rounded-lg shadow-sm font-medium text-sm transition-all border border-terracotta-800 hover:shadow-md"
          >
            <Mic className="w-4 h-4 text-ochre-500 animate-pulse" />
            <span>AI गाइड से पूछें (हिंदी)</span>
          </button>

        </div>
      </div>
    </header>
  );
}
