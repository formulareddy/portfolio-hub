import { Project, SkillCategory, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    description: "A modern analytics dashboard for financial services with real-time data visualization.",
    fullDescription:
      "A comprehensive financial analytics platform designed for institutional investors. Features real-time market data, portfolio tracking, and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
    ],
    tags: ["React", "TypeScript", "D3.js", "Tailwind"],
    problem:
      "Traditional finance dashboards are cluttered, slow, and lack modern design patterns. Users needed a solution that could handle large datasets while maintaining excellent UX.",
    process:
      "Started with user research involving 15 finance professionals. Created wireframes focusing on information hierarchy. Iterated through 3 major design phases with continuous feedback loops.",
    wireframes: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    ],
    results:
      "40% faster task completion, 85% user satisfaction score, reduced cognitive load by 60% compared to previous solutions.",
  },
  {
    id: "2",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A seamless shopping experience with AI-powered recommendations and checkout.",
    fullDescription:
      "A full-featured e-commerce platform built for a sustainable fashion brand. Includes product customization, AR try-on, and smart inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80",
    ],
    tags: ["Next.js", "Stripe", "PostgreSQL", "Framer"],
    problem:
      "The client needed to differentiate in a saturated market while reducing cart abandonment rates which were at 78%.",
    process:
      "Conducted A/B testing on 12 checkout flows. Implemented progressive disclosure patterns. Built custom AR integration for virtual try-on experience.",
    wireframes: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    ],
    results:
      "Cart abandonment reduced to 32%, conversion rate increased by 45%, average order value up by 28%.",
  },
  {
    id: "3",
    slug: "healthcare-app",
    title: "Healthcare App",
    description: "Telemedicine platform connecting patients with healthcare providers securely.",
    fullDescription:
      "A HIPAA-compliant telemedicine application enabling virtual consultations, prescription management, and health tracking with end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80",
    ],
    tags: ["React Native", "Node.js", "WebRTC", "AWS"],
    problem:
      "Healthcare accessibility gaps in rural areas, with 60% of patients traveling over 50 miles for specialist care.",
    process:
      "Collaborated with medical professionals to design accessible interfaces. Built offline-first architecture for areas with poor connectivity. Implemented WCAG 2.1 AAA compliance.",
    wireframes: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    ],
    results:
      "50,000+ active users in first 6 months, 92% patient satisfaction, reduced average consultation time by 35%.",
  },
  {
    id: "4",
    slug: "saas-product",
    title: "SaaS Productivity Tool",
    description: "Project management reimagined with AI automation and smart workflows.",
    fullDescription:
      "An intelligent project management platform that uses machine learning to predict bottlenecks, automate routine tasks, and optimize team workflows.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    ],
    tags: ["Vue.js", "Python", "TensorFlow", "GraphQL"],
    problem:
      "Teams spending 15+ hours weekly on administrative tasks instead of actual work. Need for smarter prioritization.",
    process:
      "Analyzed workflow data from 500+ teams. Developed ML models for task prediction. Created drag-and-drop workflow builder with AI suggestions.",
    wireframes: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    ],
    results:
      "23 hours saved per team per month, 67% improvement in deadline meeting, featured in Product Hunt top 10.",
  },
  {
    id: "5",
    slug: "travel-app",
    title: "Travel Companion",
    description: "AI-powered trip planning with personalized itineraries and local insights.",
    fullDescription:
      "A smart travel companion app that creates personalized travel experiences using AI, incorporating local recommendations, real-time translation, and smart budget tracking.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80",
    ],
    tags: ["Flutter", "Firebase", "Maps API", "GPT-4"],
    problem:
      "Travel planning is time-consuming and overwhelming. Average user spends 8+ hours researching a single trip.",
    process:
      "Interviewed 200 frequent travelers. Built recommendation engine using travel preferences. Integrated with 50+ travel APIs for real-time data.",
    wireframes: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    ],
    results:
      "Planning time reduced to 30 minutes average, 4.8 app store rating, 2M+ trip plans generated.",
  },
  {
    id: "6",
    slug: "real-estate",
    title: "Real Estate Platform",
    description: "Virtual property tours with 3D modeling and neighborhood analytics.",
    fullDescription:
      "A cutting-edge real estate platform featuring immersive 3D property tours, AI-powered valuation, and comprehensive neighborhood scoring system.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
    tags: ["React", "Three.js", "Mapbox", "Python"],
    problem:
      "Buyers struggle to visualize properties remotely, and agents spend excessive time on in-person tours that don't convert.",
    process:
      "Developed Matterport-style 3D scanning workflow. Created ML model for property valuation with 94% accuracy. Built comprehensive neighborhood scoring algorithm.",
    wireframes: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    ],
    results:
      "Virtual tours increased engagement by 300%, qualified leads up 45%, average time-to-offer reduced by 2 weeks.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 88 },
      { name: "GraphQL", level: 78 },
      { name: "Python", level: 72 },
    ],
  },
  {
    name: "Design & Tools",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "AWS", level: 78 },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Dribbble", url: "https://dribbble.com", icon: "dribbble" },
];

export const personalInfo = {
  name: "Alex Chen",
  title: "Frontend Developer & UI Designer",
  bio: "I craft digital experiences that blend beautiful design with seamless functionality. With 6+ years of experience building products for startups and Fortune 500 companies, I specialize in creating interfaces that users love.",
  email: "hello@alexchen.dev",
  location: "San Francisco, CA",
  available: true,
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
