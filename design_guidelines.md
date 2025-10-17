# Africanpips Design Guidelines

## Design Approach: Reference-Based

**Primary Reference**: Dooprime.com - Professional trading platform aesthetic
**Supporting References**: Trading platforms like eToro, Interactive Brokers, TradingView
**Rationale**: Financial trading platforms require trust, professionalism, and visual clarity. The design must convey credibility while making complex data accessible.

---

## Core Design Principles

1. **Professional Trust**: Clean, sophisticated interface that builds credibility
2. **Data-First Hierarchy**: Market data and tools take visual priority
3. **Accessible Complexity**: Make advanced trading concepts approachable
4. **African Identity**: Subtle cultural elements without compromising global appeal

---

## Color Palette

### Light Mode
- **Primary Brand**: 220 85% 25% (Deep professional blue - trust and stability)
- **Secondary/Accent**: 45 90% 55% (Vibrant gold - prosperity and success)
- **Success**: 142 70% 45% (Market gains green)
- **Danger**: 0 75% 55% (Market losses red)
- **Neutral Base**: 220 15% 98% (Background)
- **Neutral Text**: 220 20% 15% (Primary text)
- **Neutral Muted**: 220 10% 45% (Secondary text)

### Dark Mode
- **Primary Brand**: 220 85% 60% (Lighter blue for contrast)
- **Secondary/Accent**: 45 90% 60% (Brighter gold)
- **Success**: 142 60% 50%
- **Danger**: 0 70% 60%
- **Neutral Base**: 220 25% 8% (Dark background)
- **Neutral Text**: 220 15% 95% (Light text)
- **Neutral Surface**: 220 20% 12% (Card backgrounds)

---

## Typography

**Primary Font**: Inter (Google Fonts) - Modern, professional, excellent readability
**Secondary Font**: Manrope (Google Fonts) - Geometric, for headings and emphasis

### Type Scale
- **Hero Headline**: text-5xl to text-7xl, font-bold (Manrope)
- **Section Headings**: text-3xl to text-4xl, font-bold (Manrope)
- **Subheadings**: text-xl to text-2xl, font-semibold (Inter)
- **Body Text**: text-base, font-normal (Inter)
- **Small Text**: text-sm, secondary color
- **Data/Numbers**: text-lg to text-2xl, font-semibold, monospace for precision

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 (mobile)
- Grid gaps: gap-6 to gap-8
- Container max-width: max-w-7xl with mx-auto

**Grid Strategy**:
- Hero: Full-width with centered content
- Features: 3-column grid on desktop (lg:grid-cols-3), 1 column mobile
- Market Data: 2-4 column responsive grid
- Educational Content: Single column max-w-4xl for readability

---

## Component Library

### Navigation
- Fixed header with backdrop blur
- Logo left, navigation center, CTA buttons right
- Mega dropdown menus for Forex/Crypto/Prop Firms sections
- Mobile: Slide-in drawer navigation

### Hero Section
- Full-width with gradient overlay on background image
- Large hero image showing diverse African traders using technology
- Centered headline + subheadline + dual CTAs (primary + outline)
- Embedded trust indicators (client count, regions served)
- Height: 90vh on desktop, auto on mobile

### Market Data Widgets
- Card-based layout with subtle shadows
- Real-time price displays with color-coded gains/losses
- Mini charts (sparklines) for quick trends
- Embed TradingView widgets for detailed charts
- Dark card backgrounds for data contrast

### Interactive Tools (Calculators)
- Clean form inputs with labels
- Instant calculation results highlighted
- Step-by-step visual flow
- Example values pre-filled for guidance

### Educational Cards
- Icon + Title + Description format
- Hover effects: subtle lift and shadow increase
- Progress indicators for courses
- Difficulty badges (Beginner/Intermediate/Advanced)

### Broker Comparison Tables
- Sortable columns
- Visual rating system (stars + numerical scores)
- Highlight recommended options with accent color
- Sticky headers on scroll
- Regulation badges with trust indicators

### Call-to-Action Sections
- Full-width backgrounds with gradients
- Centered messaging with supporting benefits
- Dual button options (primary action + secondary)
- Social proof elements (testimonials, partner logos)

### News/Blog Cards
- Featured image + category tag + headline + excerpt
- Publication date and read time
- Author attribution with avatar
- Grid layout: 3 columns desktop, 1 column mobile

---

## Images

### Hero Section
**Primary Hero Image**: Dynamic shot of diverse African traders in modern office setting with multiple screens showing trading charts. Professional, aspirational, technology-focused. Should convey success, diversity, and modern financial markets.

### Section Images
- **Forex Section**: Close-up of currency pairs on digital display with charts
- **Crypto Section**: Abstract visualization of blockchain network with digital coins
- **Prop Firms Section**: Professional trader analyzing multiple screens
- **Educational Section**: Students/traders in learning environment
- **Community Section**: Group discussion or networking event

### Supporting Imagery
- Partner/sponsor logos (grayscale, colorize on hover)
- Platform screenshots for tool demonstrations
- Infographic-style illustrations for complex concepts
- Team photos for about/coaching sections

---

## Interactive Elements

### Buttons
- **Primary**: Blue background, white text, rounded-lg, px-8 py-3
- **Secondary**: Gold background, dark text for high contrast
- **Outline**: Border with transparent background, blur backdrop on images
- **Ghost**: Text-only with hover underline

### Cards
- Subtle shadow: shadow-lg
- Rounded corners: rounded-xl
- Hover: transform scale-105, shadow increase
- Border: 1px solid with low opacity

### Forms
- Input fields: Consistent height (h-12), rounded borders
- Focus states: Primary color ring
- Labels: Small text above inputs
- Error states: Red border + helper text

---

## Animations

**Minimal and purposeful only**:
- Fade-in on scroll for sections (intersection observer)
- Number counters for statistics
- Chart animations on load
- Smooth page transitions
- Hover micro-interactions (scale, shadow)

**Avoid**: Excessive parallax, distracting motion, auto-playing carousels

---

## Page-Specific Layouts

### Homepage
1. **Hero**: Full-width with image, headline, CTAs, trust metrics
2. **Market Overview**: Live data widgets in 4-column grid
3. **Core Services**: 3-column cards for Forex/Crypto/Prop Firms
4. **Interactive Tools**: Calculator showcase with demo
5. **Why Choose Us**: Benefits grid with icons
6. **Social Proof**: Client testimonials + partner logos
7. **African Focus**: Dedicated section on regional advantages
8. **Latest Insights**: Featured blog posts in 3-column grid
9. **CTA Section**: Newsletter signup + account creation
10. **Footer**: Comprehensive navigation + contact

### Educational Pages
- Sidebar navigation for topics
- Main content area: max-w-4xl
- Progress tracking for courses
- Video/interactive embeds

### Market Data Pages
- Dashboard-style layout
- Customizable widgets
- Filters and search
- Export functionality

---

## Accessibility & Performance

- Maintain WCAG AA contrast ratios
- Keyboard navigation throughout
- ARIA labels for interactive elements
- Lazy loading for images and charts
- Optimize TradingView embeds
- Responsive typography scaling
- Touch-friendly hit targets (min 44px)

---

## Brand Personality

**Visual Tone**: Professional yet approachable, modern but trustworthy, global with African pride
**Voice**: Expert but educational, confident but supportive, data-driven but human