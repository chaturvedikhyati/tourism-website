import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import TravelInfo from './components/TravelInfo';
import WhyVisit from './components/WhyVisit';
import VoiceAssistant from './components/VoiceAssistant';
import Footer from './components/Footer';
import { Mic } from 'lucide-react';

export default function App() {
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-sandstone-50 text-earth-900 selection:bg-terracotta-200">
      
      {/* Navbar */}
      <Navbar onOpenVoiceAssistant={() => setIsVoiceOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenVoiceAssistant={() => setIsVoiceOpen(true)} />
        <AboutSection />
        <TravelInfo />
        <WhyVisit />
      </main>

      {/* Floating AI Voice Mic Trigger Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsVoiceOpen(true)}
          className="group relative flex items-center space-x-2 bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 px-5 py-3.5 rounded-full shadow-2xl border-2 border-sandstone-100 transition-all transform hover:scale-105 active:scale-95 mic-active"
          title="AI वॉइस असिस्टेंट से बात करें"
        >
          <Mic className="w-6 h-6 text-ochre-500 animate-pulse" />
          <span className="font-serif font-bold text-sm hidden sm:inline">
            AI गाइड से पूछें
          </span>
        </button>
      </div>

      {/* AI Voice Assistant Modal */}
      <VoiceAssistant
        isOpen={isVoiceOpen}
        onClose={() => setIsVoiceOpen(false)}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
