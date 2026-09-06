import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, X, Send, AlertCircle, Bot, User } from 'lucide-react';
import { DESTINATION_DATA } from '../data/destinationData';

export default function VoiceAssistant({ isOpen, onClose }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'नमस्ते! मैं भीतरगाँव मंदिर का AI गाइड हूँ। आप मुझसे इस ऐतिहासिक स्थल के बारे में हिंदी में बोलकर या लिखकर सवाल पूछ सकते हैं।'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const recognitionRef = useRef(null);
  const chatEndRef = useRef(null);
  const transcriptRef = useRef('');

  // Auto scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Keep transcript ref in sync
  useEffect(() => {
    transcriptRef.current = transcript;
  }, [transcript]);

  // Setup Web Speech Recognition API (Hindi hi-IN)
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'hi-IN';

      recognition.onstart = () => {
        setIsListening(true);
        setErrorMsg('');
      };

      recognition.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setErrorMsg('ब्राउज़र में माइक अनुमति (Microphone Permission) बंद है। कृपया एड्रेस बार में माइक आइकॉन पर क्लिक करके Permission allow करें।');
        } else if (event.error !== 'no-speech') {
          setErrorMsg('आवाज़ पहचानने में समस्या आई। कृपया पुनः बोलें या टाइप करें।');
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        // Auto send transcript when user finishes speaking
        const capturedText = transcriptRef.current.trim();
        if (capturedText) {
          handleSendMessage(capturedText);
        }
      };

      recognitionRef.current = recognition;
    } else {
      setErrorMsg('आपका ब्राउज़र वॉइस इनपुट सपोर्ट नहीं करता। कृपया Google Chrome या Microsoft Edge का प्रयोग करें।');
    }
  }, []);

  // Stop TTS when closing
  useEffect(() => {
    if (!isOpen && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [isOpen]);

  // Handle voice recording toggle
  const toggleListening = () => {
    if (!recognitionRef.current) {
      setErrorMsg('कृपया Google Chrome या Microsoft Edge ब्राउज़र का प्रयोग करें।');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setTranscript('');
      transcriptRef.current = '';
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.warn('Recognition start error:', err);
      }
    }
  };

  // Text-To-Speech (Hindi TTS)
  const speakText = (text) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.95;

    const voices = window.speechSynthesis.getVoices();
    const hindiVoice = voices.find(v => v.lang.includes('hi') || v.name.includes('Hindi') || v.lang.includes('IN'));
    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Send question to API
  const handleSendMessage = async (textToSend) => {
    const queryText = (textToSend || transcript).trim();
    if (!queryText || isLoading) return;

    const userMsg = { sender: 'user', text: queryText };
    setMessages(prev => [...prev, userMsg]);
    setTranscript('');
    transcriptRef.current = '';
    setIsLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: queryText })
      });

      const data = await response.json();
      const aiReply = data.answer || 'माफ़ कीजिये, उत्तर प्राप्त करने में त्रुटि हुई।';

      const aiMsg = { sender: 'ai', text: aiReply };
      setMessages(prev => [...prev, aiMsg]);
      setIsLoading(false);

      // Read out loud response
      speakText(aiReply);

    } catch (err) {
      console.error('API error:', err);
      const fallbackReply = 'भीतरगाँव मंदिर कानपुर में स्थित 5वीं शताब्दी का भारत का सबसे पुराना ईंटों का मंदिर है।';
      setMessages(prev => [...prev, { sender: 'ai', text: fallbackReply }]);
      setIsLoading(false);
      speakText(fallbackReply);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-earth-900/70">
      
      <div className="w-full max-w-2xl bg-sandstone-50 rounded-2xl border-2 border-sandstone-300 shadow-2xl flex flex-col h-[600px] max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-terracotta-900 text-sandstone-50 px-6 py-4 flex items-center justify-between border-b border-terracotta-950">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-terracotta-700 text-ochre-500 flex items-center justify-center border border-terracotta-600">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-sandstone-100">
                भीतरगाँव AI गाइड (Hindi Voice Assistant)
              </h3>
              <span className="text-xs text-sandstone-300 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
                ऑनलाइन • वॉइस व टेक्स्ट एक्टिव
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-sandstone-300 hover:text-sandstone-50 hover:bg-terracotta-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Chips */}
        <div className="bg-sandstone-100 p-3 border-b border-sandstone-300 overflow-x-auto">
          <span className="text-xs font-semibold text-earth-800 block mb-1.5 font-serif">
            त्वरित प्रश्न (क्लिक करें):
          </span>
          <div className="flex space-x-2 no-scrollbar whitespace-nowrap">
            {DESTINATION_DATA.presetVoiceQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="text-xs bg-sandstone-50 hover:bg-terracotta-100 text-terracotta-800 border border-sandstone-300 hover:border-terracotta-300 px-3 py-1.5 rounded-full transition-colors flex-shrink-0 font-medium"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-sandstone-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-earth-800 text-sandstone-50'
                    : 'bg-terracotta-700 text-sandstone-50'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] p-4 rounded-xl text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-earth-800 text-sandstone-50 rounded-tr-none'
                    : 'bg-sandstone-100 text-earth-900 border border-sandstone-300 rounded-tl-none'
                }`}
              >
                <p>{msg.text}</p>
                
                {msg.sender === 'ai' && (
                  <div className="mt-2 pt-2 border-t border-sandstone-300 flex items-center justify-between text-xs text-terracotta-800">
                    <button
                      onClick={() => isSpeaking ? stopSpeaking() : speakText(msg.text)}
                      className="flex items-center space-x-1 font-semibold hover:text-terracotta-900 transition-colors"
                    >
                      {isSpeaking ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-terracotta-700 animate-bounce" />
                          <span>ऑडियो रोकें</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-terracotta-700" />
                          <span>हिंदी में बोलकर सुनें</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-terracotta-700 text-sandstone-50 flex items-center justify-center">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-sandstone-100 p-3.5 rounded-xl border border-sandstone-300 text-xs text-earth-700 font-medium">
                AI सोच रहा है और उत्तर तैयार कर रहा है...
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Live Mic Transcript Bar */}
        {isListening && (
          <div className="bg-terracotta-100 border-t border-terracotta-300 p-3 text-center text-xs text-terracotta-900 font-medium flex items-center justify-center space-x-2">
            <Mic className="w-4 h-4 text-terracotta-700 animate-spin" />
            <span>माइक चालू है: "{transcript || 'हिंदी में बोलिए...'}"</span>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="bg-red-50 text-red-800 p-2.5 text-xs text-center border-t border-red-200 flex items-center justify-center gap-1 font-medium">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Input Bar */}
        <div className="p-3 bg-sandstone-100 border-t border-sandstone-300 flex items-center space-x-2">
          
          <button
            onClick={toggleListening}
            className={`p-3 rounded-full transition-all flex-shrink-0 ${
              isListening
                ? 'bg-red-600 text-white mic-active scale-110 shadow-lg'
                : 'bg-terracotta-700 hover:bg-terracotta-800 text-sandstone-50 shadow-md'
            }`}
            title={isListening ? "रिकॉर्डिंग रोकें" : "हिंदी में बोलकर पूछें"}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5 text-ochre-500" />}
          </button>

          <input
            type="text"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="हिंदी में सवाल टाइप करें या माइक बटन दबाएं..."
            className="flex-1 bg-sandstone-50 border border-sandstone-300 rounded-lg px-4 py-2.5 text-sm text-earth-900 placeholder-earth-700 focus:outline-none focus:border-terracotta-700"
          />

          <button
            onClick={() => handleSendMessage()}
            disabled={!transcript.trim() || isLoading}
            className="bg-earth-900 hover:bg-earth-800 disabled:opacity-50 text-sandstone-50 p-2.5 rounded-lg transition-colors flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>

        </div>

      </div>
    </div>
  );
}
