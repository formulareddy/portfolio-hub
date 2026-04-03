# Portfolio Website Specification

## 1. Concept & Vision

A sophisticated, editorial-style developer portfolio inspired by high-end Figma community designs. The site embodies the philosophy of "less is more" — using bold typography, generous whitespace, and subtle motion to create an immersive experience that showcases work without distraction. Every interaction feels intentional and refined.

## 2. Design Language

### Aesthetic Direction
Inspired by Tomasz Gajda's portfolio — editorial minimalism meets Swiss design principles. Large typographic statements, asymmetric grid layouts, and micro-animations that respond to user interaction.

### Color Palette
```
--bg-primary: #0a0a0a (near-black)
--bg-secondary: #141414 (dark gray)
--bg-tertiary: #1f1f1f (card backgrounds)
--text-primary: #ffffff (white)
--text-secondary: #a3a3a3 (muted text)
--text-tertiary: #737373 (subtle text)
--accent: #8b5cf6 (violet-500)
--accent-glow: rgba(139, 92, 246, 0.4)
--border: #262626 (subtle borders)
```

### Light Mode
```
--bg-primary: #fafafa
--bg-secondary: #f5f5f5
--bg-tertiary: #ffffff
--text-primary: #0a0a0a
--text-secondary: #525252
--text-tertiary: #a3a3a3
--accent: #7c3aed (violet-600)
--border: #e5e5e5
```

### Typography
- **Display**: Inter (Google Fonts) — weights 700, 800, 900
- **Body**: Inter — weights 400, 500, 600
- **Mono**: JetBrains Mono for code snippets
- **Scale**: 
  - Hero: 72px / 80px mobile: 48px
  - H1: 48px
  - H2: 36px
  - H3: 24px
  - Body: 16px
  - Small: 14px
  - Micro: 12px

### Spatial System
- Base unit: 8px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Container max-width: 1280px
- Section padding: 96px vertical (desktop), 64px (mobile)
- Card padding: 24px
- Grid gap: 24px (desktop), 16px (mobile)

### Motion Philosophy
- **Entrance**: Fade-up with stagger (opacity 0→1, y: 20→0, 600ms ease-out)
- **Hover**: Scale 1.02, subtle shadow lift, 200ms
- **Page transitions**: Fade through (300ms)
- **Scroll reveals**: Intersection Observer triggered, 400ms ease-out
- **Micro-interactions**: Button press scale(0.98), link underline draw

### Visual Assets
- Icons: Lucide React (consistent 24px stroke-width 1.5)
- Project images: Unsplash with blur-up loading
- Decorative: Gradient orbs, subtle grain texture overlay

## 3. Layout & Structure

### Page Architecture
```
├── Hero (100vh, sticky nav)
├── About (asymmetric two-column)
├── Projects (3-column masonry grid)
├── Skills (categorized grid)
├── Contact (split layout: form + info)
└── Footer (minimal)
```

### Navigation
- Fixed top nav with blur backdrop
- Logo left, links right
- Mobile: hamburger menu with full-screen overlay
- Active section highlighting via scroll spy

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 4. Features & Interactions

### Dark Mode Toggle
- System preference detection on first load
- Manual toggle persisted to localStorage
- Smooth color transition (200ms)
- Icon morphs between sun/moon

### Smooth Scrolling
- Native CSS scroll-behavior: smooth
- Scroll-linked navbar background opacity

### Project Cards
- **Default**: Image with gradient overlay at bottom, title + description
- **Hover**: Scale 1.02, overlay lifts, arrow appears
- **Click**: Navigate to case study with page transition

### Contact Form
- Fields: Name, Email, Message
- Validation: Real-time with error states
- Submit: Loading state → success message
- Error handling: Toast notification

### Page Transitions
- Framer Motion AnimatePresence
- Fade + slight y-translate on route change

## 5. Component Inventory

### Button
- **Variants**: primary (filled), secondary (outline), ghost
- **Sizes**: sm, md, lg
- **States**: default, hover (glow), active (scale 0.98), disabled, loading

### Card (Project)
- **Default**: Rounded-xl, overflow-hidden, bg-tertiary
- **Hover**: Shadow-xl, scale 1.02, accent border glow
- **Content**: Image, gradient overlay, title, description, tags

### NavLink
- **Default**: text-secondary
- **Hover**: text-primary, underline draw animation
- **Active**: text-accent

### Input/Textarea
- **Default**: bg-transparent, border-b, focus:border-accent
- **Error**: border-red-500, shake animation
- **Disabled**: opacity-50

### Badge (Skill Tag)
- Pill shape, bg-tertiary, text-sm
- Hover: bg-accent/20

### Section Header
- Large bold text, optional subtitle
- Decorative line accent

## 6. Technical Approach

### Framework & Architecture
- Next.js 14+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- React Hook Form for contact form

### File Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── projects/[slug]/page.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   └── SectionHeader.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       └── Contact.tsx
├── lib/
│   ├── data.ts (projects, skills data)
│   └── utils.ts
├── hooks/
│   ├── useScrollReveal.ts
│   └── useTheme.ts
└── types/
    └── index.ts
```

### SEO
- Metadata API for pages
- OpenGraph images
- Semantic HTML structure
- Performance optimized images (next/image)

### Performance
- Static generation for project pages
- Image optimization
- Code splitting via App Router
- Font optimization with next/font
