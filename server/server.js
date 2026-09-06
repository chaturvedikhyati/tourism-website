import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { DESTINATION_CONTEXT, FALLBACK_KNOWLEDGE_BASE } from './promptContext.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Google Gemini SDK if API key is provided
let googleGenAIModel = null;
if (process.env.GEMINI_API_KEY) {
  try {
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    googleGenAIModel = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    console.log('✅ Google Gemini API initialized successfully.');
  } catch (err) {
    console.warn('⚠️ Could not load @google/generative-ai, using intelligent fallback server mode.', err.message);
  }
} else {
  console.log('ℹ️ No GEMINI_API_KEY found in .env. Running with specialized Bhitargaon AI knowledge fallback.');
}

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message text is required' });
    }

    const cleanMsg = message.trim().toLowerCase();

    // 1. Try Gemini API if model initialized
    if (googleGenAIModel) {
      try {
        const prompt = `${DESTINATION_CONTEXT}\n\nउपयोगकर्ता का प्रश्न: ${message}`;
        const result = await googleGenAIModel.generateContent(prompt);
        const replyText = result.response.text().trim();
        if (replyText) {
          return res.json({ answer: replyText, source: 'gemini' });
        }
      } catch (geminiError) {
        console.error('Gemini API call failed, falling back to local KB:', geminiError.message);
      }
    }

    // 2. Local Fallback Knowledge Base matching
    for (const item of FALLBACK_KNOWLEDGE_BASE) {
      const match = item.keywords.some(kw => cleanMsg.includes(kw.toLowerCase()));
      if (match) {
        return res.json({ answer: item.answer, source: 'fallback' });
      }
    }

    // Default smart response about Bhitargaon Temple
    const defaultAnswer = `भीतरगाँव मंदिर (Kanpur) 5वीं शताब्दी गुप्त काल का ईंटों का अद्वितीय मंदिर है। आप इसके इतिहास, पहुँचने के मार्ग, खुलने के समय या आसपास के स्थलों के बारे में पूछ सकते हैं।`;
    return res.json({ answer: defaultAnswer, source: 'default' });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'आंतरिक सर्वर त्रुटि। कृपया पुनः प्रयास करें।' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', destination: 'Bhitargaon Temple Tourism AI' });
});

app.listen(PORT, () => {
  console.log(`🚀 Bhitargaon Tourism Server running on http://localhost:${PORT}`);
});
