import React from 'react';
import { History, ShieldCheck, Gem, Sparkles } from 'lucide-react';
import { DESTINATION_DATA } from '../data/destinationData';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-sandstone-100 border-b border-sandstone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-terracotta-700 uppercase bg-terracotta-100 px-3 py-1 rounded border border-terracotta-200">
            ऐतिहासिक विरासत
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-earth-900">
            {DESTINATION_DATA.about.title}
          </h2>
          <p className="text-earth-700 text-base sm:text-lg leading-relaxed font-sans">
            {DESTINATION_DATA.about.description}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Carvings Showcase Image Card */}
          <div className="lg:col-span-5">
            <div className="bg-sandstone-50 p-3 rounded-2xl border border-sandstone-300 shadow-md">
              <img
                src={DESTINATION_DATA.carvingsImage}
                alt="भीतरगाँव मंदिर की टेराकोटा नक्काशी"
                className="w-full h-80 sm:h-96 object-cover rounded-xl border border-sandstone-300"
              />
              <div className="p-4 space-y-1">
                <span className="text-xs font-bold text-terracotta-700 uppercase tracking-wide">
                  टेराकोटा पट्टिकाएँ (Terracotta Panels)
                </span>
                <p className="text-xs text-earth-700">
                  मंदिर के बाहरी भाग में मिट्टी में ढली भगवान विष्णु, गणेश और पौराणिक गाथाओं की नक्काशीदार मूर्तियां।
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            {DESTINATION_DATA.about.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-sandstone-50 p-6 rounded-xl border border-sandstone-300 shadow-sm flex items-start space-x-4 hover:border-terracotta-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-terracotta-100 text-terracotta-800 flex items-center justify-center flex-shrink-0 border border-terracotta-200 font-bold font-serif text-lg">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif text-earth-900">
                    {feat.title}
                  </h3>
                  <p className="text-earth-700 text-sm mt-1 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Quote / Highlight Box */}
            <div className="p-5 rounded-xl bg-terracotta-900 text-sandstone-50 border border-terracotta-950 space-y-2">
              <div className="flex items-center space-x-2 text-ochre-500 font-serif font-bold text-sm">
                <Gem className="w-4 h-4" />
                <span>पुरातत्वविद राय कृष्णदास के अनुसार</span>
              </div>
              <p className="text-xs sm:text-sm text-sandstone-200 italic leading-relaxed">
                "भीतरगाँव मंदिर उत्तर भारत के मंदिर वास्तुकला के विकास की सबसे महत्वपूर्ण कड़ी है। यह साबित करता है कि भारतीय कारीगर ईंटों के निर्माण में 1500 वर्ष पूर्व भी विश्व में शीर्ष पर थे।"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
