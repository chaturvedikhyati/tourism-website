# AI-Powered Tourism Website - Bhitargaon Temple (भीतरगाँव मंदिर)

**EduFutura Technologies - Round 2 Task Assessment**  
**Selected Stack**: Option 1 (React + Node.js/Express + Google Gemini AI)

---

## 🛕 About The Project

This single-page tourism web application showcases an underrated historical hidden gem of Uttar Pradesh: **Bhitargaon Terracotta Temple (भीतरगाँव मंदिर, कानपुर)** — India's oldest surviving 5th-century Gupta Empire terracotta brick temple.

The main highlight of this application is an integrated **AI-powered Voice Assistant** designed to understand voice input in **Hindi**, provide historical and travel details, and speak out responses using Text-to-Speech (TTS).

---

## ✨ Features

- **Responsive Single-Page Layout**:
  - **Hero Section**: High-resolution generated photography, stats badges, and tagline.
  - **About Section**: History of the 1500+ years old Gupta Dynasty architecture and terracotta relief panel art.
  - **Travel Information**: Directions (Road, Railway, Airport), Best Time to Visit (October–March), Free entry details, Things to do, and nearby attractions (Bithoor & Jajmau).
  - **Why Visit Section**: Highlights on why this ancient monument deserves national tourism attention.
- **AI Voice Assistant (Hindi Focus)**:
  - Speech-to-text recording using Browser Web Speech API (`hi-IN`).
  - Dynamic visualizer with pulsing microphone state.
  - Integrated with Express `/api/chat` (Google Gemini API with intelligent fallback knowledge base).
  - Text-To-Speech (TTS) audio readout in Hindi (`window.speechSynthesis`).
  - One-click Hindi preset query chips for instant testing.
- **Design System**:
  - Warm, artisan terracotta palette (`#A6422A`, `#8B321D`) and sandstone parchment.
  - **No Blue Color**, **No Glassmorphism** (solid elegant heritage borders).

---

## 📁 Project Structure

```
ai-tourism-underrated/
├── server/                    # Node.js + Express Backend
│   ├── server.js              # Express server with /api/chat route
│   ├── promptContext.js       # System prompt & Bhitargaon knowledge base
│   └── package.json
├── client/                    # React + Vite + Tailwind CSS Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── TravelInfo.jsx
│   │   │   ├── WhyVisit.jsx
│   │   │   ├── VoiceAssistant.jsx
│   │   │   └── Footer.jsx
│   │   ├── data/
│   │   │   └── destinationData.js
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install & Run Backend Server
```bash
cd server
npm install
npm start
```
*Backend runs on http://localhost:5000*

### 2. Install & Run Frontend Client
```bash
cd client
npm install
npx vite --port 3000
```
*Frontend runs on http://localhost:3000*
