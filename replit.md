# Africanpips - Trading Education Platform

## Overview
Africanpips is a comprehensive trading education and resource platform designed to empower traders in Forex, Cryptocurrency, and Proprietary Trading Firms (Prop Firms). The platform provides tools, insights, and training to help traders navigate financial markets effectively, with a strong emphasis on the African market.

## Mission
To bridge the knowledge gap in Forex, Crypto, and Prop Trading, equipping African traders with the necessary tools, education, and real-time insights to succeed in global markets.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI, Wouter (routing)
- **Backend**: Express.js, Node.js
- **Storage**: In-memory storage (MemStorage)
- **Charts**: TradingView embedded widgets
- **Design**: Professional blue (#1a4d8f) and gold (#e6b800) color scheme

## Project Structure

### Frontend Pages
- **Home** (`/`) - Landing page with hero, market data, services overview, calculators, broker comparison, news, and newsletter
- **Forex Trading** (`/forex`) - Comprehensive forex education and live market data
- **Cryptocurrency** (`/crypto`) - Crypto fundamentals and trading strategies
- **Prop Firms** (`/prop-firms`) - Information about proprietary trading firms
- **Tools** (`/tools`) - Trading calculators (Pip Calculator, Profit/Loss Calculator)

### Key Components
- **Navigation** - Responsive navigation with mega dropdown menus
- **Hero** - Full-width hero section with generated images and stats
- **MarketData** - Live forex and crypto price widgets via TradingView
- **ServicesOverview** - Three main service cards (Forex, Crypto, Prop Firms)
- **Calculators** - Interactive pip and profit/loss calculators
- **BrokerComparison** - Tabbed comparison of brokers, exchanges, and prop firms
- **NewsSection** - Latest market insights and articles
- **Newsletter** - Email subscription form connected to backend
- **Footer** - Comprehensive footer with links and social media

### Backend API
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter/subscribers` - Get all newsletter subscribers (admin)

### Data Models
- **NewsletterSubscriber** - Email subscriptions with timestamps
- **Broker** - Forex broker information (static data for MVP)
- **CryptoExchange** - Cryptocurrency exchange information (static data for MVP)
- **PropFirm** - Proprietary trading firm information (static data for MVP)
- **NewsArticle** - Market news and insights (static data for MVP)

## Features

### MVP Features Implemented
✅ Modern landing page with hero section and call-to-actions
✅ Live market data widgets (TradingView integration)
✅ Educational content sections for Forex, Crypto, and Prop Firms
✅ Interactive trading calculators (Pip & Profit/Loss)
✅ Broker, exchange, and prop firm comparison tables
✅ Market news section with articles
✅ Newsletter subscription with backend integration
✅ Fully responsive design
✅ Professional UI with smooth animations
✅ SEO-optimized with meta tags

### Interactive Tools
1. **Pip Calculator** - Calculate pip values for forex trades
2. **Profit/Loss Calculator** - Calculate trade outcomes based on entry/exit prices

## Design System
- **Primary Color**: Blue (220° 85% 30%) - Trust and professionalism
- **Accent Color**: Gold (45° 85% 60%) - Prosperity and success
- **Typography**: Inter (body), Manrope (headings)
- **Spacing**: Consistent 6-8 spacing for components, 16-24 for sections
- **Components**: Shadcn UI with custom styling
- **Animations**: Subtle hover effects and transitions

## Running the Project
The application runs on a single port with both frontend and backend:
- Frontend: Vite dev server
- Backend: Express server
- Command: `npm run dev`

## Recent Changes (October 17, 2025)
- Implemented complete MVP with all core features
- Created professional hero images using AI generation
- Built comprehensive component library following design guidelines
- Integrated TradingView widgets for live market data
- Implemented newsletter subscription functionality
- Added full responsive design across all breakpoints

## Future Enhancements
- User authentication and personalized dashboards
- Community forums and discussion boards
- Interactive trading simulator
- Webinar scheduling system
- Affiliate tracking for broker partnerships
- Video courses and certification programs
