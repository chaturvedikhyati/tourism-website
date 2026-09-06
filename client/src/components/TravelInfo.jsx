import React from 'react';
import { MapPin, Navigation, Calendar, Clock, Ticket, Compass, ChevronRight } from 'lucide-react';
import { DESTINATION_DATA } from '../data/destinationData';

export default function TravelInfo() {
  const { travelInfo, viewImage } = DESTINATION_DATA;

  return (
    <section id="travel-info" className="py-16 md:py-24 bg-sandstone-50 border-b border-sandstone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-terracotta-700 uppercase bg-terracotta-100 px-3 py-1 rounded border border-terracotta-200">
            पर्यटन मार्गदर्शिका
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-earth-900">
            यात्रा एवं दर्शन संबंधी आवश्यक जानकारी
          </h2>
          <p className="text-earth-700 text-base font-sans">
            भीतरगाँव मंदिर की यात्रा को सुगम और आरामदायक बनाने के लिए संपूर्ण विवरण।
          </p>
        </div>

        {/* Top Info Cards Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-sandstone-100 p-6 rounded-xl border border-sandstone-300 flex items-start space-x-4">
            <div className="p-3 bg-terracotta-100 text-terracotta-800 rounded-lg border border-terracotta-200">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-earth-900 uppercase tracking-wide">सर्वोत्तम समय</h3>
              <p className="text-base font-semibold text-terracotta-800 font-serif mt-1">{travelInfo.bestTime}</p>
              <p className="text-xs text-earth-700 mt-1">सर्दियों के दिनों में धूप और मौसम भ्रमण के लिए अनुकूल रहता है।</p>
            </div>
          </div>

          <div className="bg-sandstone-100 p-6 rounded-xl border border-sandstone-300 flex items-start space-x-4">
            <div className="p-3 bg-terracotta-100 text-terracotta-800 rounded-lg border border-terracotta-200">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-earth-900 uppercase tracking-wide">दर्शनावधि समय</h3>
              <p className="text-base font-semibold text-terracotta-800 font-serif mt-1">{travelInfo.timings}</p>
              <p className="text-xs text-earth-700 mt-1">सप्ताह के सभी 7 दिन खुला रहता है।</p>
            </div>
          </div>

          <div className="bg-sandstone-100 p-6 rounded-xl border border-sandstone-300 flex items-start space-x-4">
            <div className="p-3 bg-terracotta-100 text-terracotta-800 rounded-lg border border-terracotta-200">
              <Ticket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-earth-900 uppercase tracking-wide">प्रवेश शुल्क</h3>
              <p className="text-base font-semibold text-terracotta-800 font-serif mt-1">{travelInfo.entryFee}</p>
              <p className="text-xs text-earth-700 mt-1">ASI द्वारा संरक्षित स्मारक होने से प्रवेश निःशुल्क है।</p>
            </div>
          </div>

        </div>

        {/* How to Reach & Surroundings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* How to Reach Routes */}
          <div className="lg:col-span-7 space-y-6 bg-sandstone-100 p-6 sm:p-8 rounded-2xl border border-sandstone-300 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-earth-900 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-terracotta-700" />
              <span>कैसे पहुँचें? (How to Reach)</span>
            </h3>

            <div className="space-y-4">
              {travelInfo.howToReach.map((item, idx) => (
                <div key={idx} className="bg-sandstone-50 p-4 rounded-lg border border-sandstone-300 space-y-1">
                  <div className="text-sm font-bold text-terracotta-800 font-serif">
                    {item.mode}
                  </div>
                  <p className="text-xs sm:text-sm text-earth-800 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Things To Do */}
            <div className="pt-4 border-t border-sandstone-300">
              <h4 className="text-base font-serif font-bold text-earth-900 mb-3">
                मुख्य गतिविधियाँ (Things to Do)
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {travelInfo.thingsToDo.map((act, idx) => (
                  <li key={idx} className="text-xs text-earth-800 flex items-center space-x-2 bg-sandstone-50 p-2.5 rounded border border-sandstone-300">
                    <ChevronRight className="w-3.5 h-3.5 text-terracotta-700 flex-shrink-0" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Nearby Attractions & Image */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-xl overflow-hidden border border-sandstone-300 shadow-sm">
              <img
                src={viewImage}
                alt="भीतरगाँव मंदिर का मनोरम दृश्य"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-sandstone-100 p-6 rounded-2xl border border-sandstone-300 space-y-4">
              <h3 className="text-lg font-serif font-bold text-earth-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-terracotta-700" />
                <span>आसपास के दर्शनीय स्थल</span>
              </h3>

              <div className="space-y-3">
                {travelInfo.nearbyAttractions.map((spot, idx) => (
                  <div key={idx} className="bg-sandstone-50 p-3.5 rounded-lg border border-sandstone-300 flex justify-between items-center">
                    <div>
                      <span className="text-sm font-bold text-earth-900 block font-serif">{spot.name}</span>
                      <span className="text-xs text-earth-700 block">{spot.desc}</span>
                    </div>
                    <span className="text-xs font-semibold text-terracotta-800 bg-terracotta-100 px-2.5 py-1 rounded border border-terracotta-200">
                      {spot.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
