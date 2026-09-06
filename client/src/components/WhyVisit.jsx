import React from 'react';
import { Eye, ShieldAlert, Award, HeartHandshake } from 'lucide-react';
import { DESTINATION_DATA } from '../data/destinationData';

export default function WhyVisit() {
  return (
    <section id="why-visit" className="py-16 md:py-24 bg-sandstone-100 border-b border-sandstone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-terracotta-700 uppercase bg-terracotta-100 px-3 py-1 rounded border border-terracotta-200">
            अनदेखा खजाना
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-earth-900">
            भीतरगाँव मंदिर क्यों देखना चाहिए?
          </h2>
          <p className="text-earth-700 text-base font-sans">
            यह केवल एक ऐतिहासिक इमारत नहीं, बल्कि प्राचीन भारतीय वास्तुकला की अमर गाथा है जिसे अधिक पहचान मिलनी चाहिए।
          </p>
        </div>

        {/* 3 Why Visit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESTINATION_DATA.whyVisit.map((item, idx) => (
            <div
              key={idx}
              className="bg-sandstone-50 p-8 rounded-2xl border border-sandstone-300 shadow-sm hover:shadow-md hover:border-terracotta-400 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-terracotta-700 text-sandstone-50 flex items-center justify-center font-bold font-serif text-xl shadow-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold font-serif text-earth-900">
                  {item.title}
                </h3>
                <p className="text-earth-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-sandstone-200 flex items-center text-xs text-terracotta-800 font-medium">
                <HeartHandshake className="w-4 h-4 mr-1.5 text-terracotta-700" />
                <span>विरासत संरक्षण का हिस्सा बनें</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-12 bg-sandstone-200 p-8 rounded-2xl border border-sandstone-300 text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-serif font-bold text-earth-900">
            "उत्तर प्रदेश की इस 1500 वर्ष पुरानी टेराकोटा धरोहर को जानने की शुरुआत करें"
          </h3>
          <p className="text-earth-800 text-sm max-w-2xl mx-auto">
            हमारे AI वॉइस असिस्टेंट से हिंदी में अपने मनचाहे सवाल पूछें और अपनी यात्रा की योजना आसानी से बनाएं।
          </p>
        </div>

      </div>
    </section>
  );
}
