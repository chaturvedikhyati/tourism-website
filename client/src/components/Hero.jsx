import React from 'react';
import { Mic, Landmark, Calendar, Sparkles, MapPin } from 'lucide-react';
import { DESTINATION_DATA } from '../data/destinationData';

export default function Hero({ onOpenVoiceAssistant }) {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:py-20 bg-sandstone-50 border-b border-sandstone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 bg-sandstone-200 text-terracotta-800 px-3.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider border border-sandstone-300">
              <Landmark className="w-4 h-4 text-terracotta-700" />
              <span>भारत की अनदेखी ऐतिहासिक धरोहर</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-earth-900 leading-tight">
              {DESTINATION_DATA.name}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-terracotta-800 font-serif">
              {DESTINATION_DATA.tagline}
            </p>

            <p className="text-earth-700 text-base sm:text-lg leading-relaxed font-sans">
              बिना किसी सीमेंट या चूने के, केवल पकी हुई मिट्टी की ईंटों (Terracotta Bricks) से बना 
              <strong className="text-earth-900"> 1500 साल पुराना </strong> 
              यह मंदिर गुप्त काल का भारत में अकेला ऐसा ढांचा है जिसका शिखर आज भी सुरक्षित खड़ा है।
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenVoiceAssistant}
                className="flex items-center space-x-3 bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 px-6 py-3.5 rounded-lg shadow-md font-semibold text-base transition-all border border-terracotta-900 hover:shadow-lg transform active:scale-98"
              >
                <Mic className="w-5 h-5 text-ochre-500 animate-bounce" />
                <span>AI गाइड से बोलकर पूछें</span>
              </button>

              <a
                href="#about"
                className="inline-flex items-center space-x-2 bg-sandstone-100 hover:bg-sandstone-200 text-earth-900 px-5 py-3.5 rounded-lg font-medium text-base transition-colors border border-sandstone-300"
              >
                <span>इतिहास देखें</span>
              </a>
            </div>

            {/* Stats Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {DESTINATION_DATA.stats.map((stat, idx) => (
                <div key={idx} className="bg-sandstone-100 p-3.5 rounded-lg border border-sandstone-300">
                  <span className="block text-xs text-earth-700 font-medium uppercase tracking-wider">{stat.label}</span>
                  <span className="block text-sm sm:text-base font-bold text-terracotta-800 font-serif mt-0.5">{stat.value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Image Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-sandstone-200 bg-sandstone-200">
              <img
                src={DESTINATION_DATA.heroImage}
                alt="भीतरगाँव टेराकोटा मंदिर"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-earth-900/90 text-sandstone-50 p-4 border-t border-terracotta-700">
                <p className="text-xs text-sandstone-300 font-mono flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-ochre-500" /> {DESTINATION_DATA.location}
                </p>
                <p className="text-sm font-semibold font-serif mt-0.5 text-sandstone-100">
                  उत्तर प्रदेश का गुप्तकालीन स्थापत्य चमत्कार
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
