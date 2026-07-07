# Khoj Bharat AI (खोज भारत एआई) - Indian Travel & Cultural Discovery Guide

Khoj Bharat AI is a highly immersive, personalized cultural and travel planner designed exclusively for exploring destinations within India. It crafts tailored travel guides incorporating budget limitations, travel styles, and specific interest pairs.

## Core Features
- **AI Itinerary Generator**: Custom-synthesized 1-day morning, afternoon, and evening plan optimized for your budget and style.
- **Hidden Gems Discovery**: 3 authentic, lesser-known local sites with visiting times and realistic costs.
- **Local Culinary Guide**: Authentic local dishes with average pricing and specific famous restaurant suggestions.
- **Cultural Corner**: Dynamic custom local customs, dress code advice, greeting tips, and cultural taboos.
- **Story Corner**: A beautifully narrated 150-word cultural legend or historical tale capturing the soul of each city.
- **Safety & Emergency Hospital Helpline**: Real and highly realistic local emergency numbers, including direct clickable phone lines for government/public hospitals.
- **Ask Local AI**: Interactive follow-up conversational agent powered by Gemini to ask anything about your destination in English or natural Hindi.

---

## Local Development Setup

To run this application locally:

1. **Clone the repository** and navigate to the project root directory.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your Gemini Developer API Key (obtained from [Google AI Studio](https://aistudio.google.com/)):
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` to preview the application.

---

## Deployment Guide

This project is configured as a standard full-stack Node.js application (Express + Vite) and can be deployed directly to any standard hosting platform.

### 1. Deploying to Railway (Recommended for Full-Stack)
Railway is ideal for running standard full-stack Node.js applications with active servers.

1. Create a free account at [Railway.app](https://railway.app/).
2. Click **New Project** and select **Deploy from GitHub repository**.
3. Authorize and choose your repository.
4. Go to the **Variables** tab of your service and add:
   - `GEMINI_API_KEY` = `<your_api_key_from_google_ai_studio>`
   - `NODE_ENV` = `production`
5. Railway will automatically read the `start` and `build` scripts in `package.json` to build and deploy your app.

### 2. Deploying to Render (Recommended for Full-Stack)
Render provides free-tier hosting for web services with dynamic backend.

1. Sign up at [Render.com](https://render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository.
4. Configure the following settings:
   - **Language**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
5. Click **Advanced** and add your environment variable:
   - `GEMINI_API_KEY` = `<your_api_key_from_google_ai_studio>`
6. Click **Deploy Web Service**.

### 3. Deploying to Vercel
To deploy this Express + Vite app to Vercel as a single serverless deployment, Vercel requires a serverless function adapter or configuration mapping.

1. Install the Vercel CLI or connect your project via the [Vercel Dashboard](https://vercel.com/).
2. Add a `vercel.json` configuration file in the project root to route requests to your API and serve static files:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "dist/server.cjs",
         "use": "@vercel/node"
       },
       {
         "src": "dist/**/*",
         "use": "@vercel/static"
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "dist/server.cjs"
       },
       {
         "src": "/(.*)",
         "dest": "dist/$1",
         "continue": true
       }
     ]
   }
   ```
3. Ensure you set the `GEMINI_API_KEY` in the project's **Environment Variables** settings page before building.

### 4. Deploying to Netlify
For Netlify, you can deploy the frontend as a static SPA and route API requests to Netlify Edge / Serverless Functions.

1. Set up a serverless function folder (e.g. `netlify/functions/server.js`) using adapters like `serverless-http` to wrap the Express backend.
2. Configure `netlify.toml` in your root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/server/:splat"
     status = 200
   ```
3. Set the `GEMINI_API_KEY` environment variable in the **Site settings > Environment variables** tab in Netlify.

---

## Production Build & Verification

Before deploying, you can verify your production build locally using:
```bash
npm run build
npm run start
```
This will compile the Vite client assets and bundle your backend code into a single high-performance `dist/server.cjs` file, ready to be hosted anywhere.
