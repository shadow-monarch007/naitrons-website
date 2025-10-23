export interface Service {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  icon?: string; // could map to an SVG in /public or a react component later
  highlights?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact?: string;
  technologies: string[];
  year?: number;
  url?: string;
  featured?: boolean;
}

export interface ValueProp {
  id: string;
  title: string;
  summary: string;
  detail?: string;
  icon?: string; // mapping to a future icon component
}

export interface ProcessStep {
  id: string;
  title: string;
  summary: string;
  deliverable?: string;
  visual?: boolean;
}

export interface MetricStat {
  id: string;
  label: string;
  value: string; // formatted (e.g., '65%')
  help?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path for icon
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    id: 'custom-ml',
    title: 'Custom ML Models',
    tagline: 'From data to deployment',
    description: 'Designing, training, and optimizing machine learning models tailored to your domain and KPIs.',
    highlights: ['Model prototyping', 'MLOps integration', 'Performance optimization']
  },
  {
    id: 'automation',
    title: 'Intelligent Automation',
    tagline: 'Reduce manual toil',
    description: 'Workflow and process automation powered by AI-driven decisioning and orchestration.',
    highlights: ['Process mapping', 'Agent workflows', 'Monitoring & feedback loops']
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    tagline: 'Insightful storytelling',
    description: 'Interactive dashboards and exploratory visualization for real-time and batch data.',
    highlights: ['Story-first design', '3D & WebGL options', 'Real-time streaming']
  },
  {
    id: 'advisory',
    title: 'AI Strategy Advisory',
    tagline: 'Roadmaps that ship',
    description: 'Strategic guidance aligning AI initiatives with business outcomes and responsible use.',
    highlights: ['Capability assessment', 'Prioritized roadmap', 'Governance & ethics']
  }
];

export const portfolio: PortfolioItem[] = [
  {
    id: 'incredible-karnataka',
    title: 'Incredible Karnataka',
    summary: 'Travel agency website showcasing Karnataka tourism destinations.',
    problem: 'Travel agency needed online presence to showcase Karnataka destinations.',
    solution: 'Created modern, responsive website with booking integration.',
    impact: 'Website and technical solutions for travel agency.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    year: 2025,
    featured: true
  },
  {
    id: 'predictive-analytics-dashboard',
    title: 'Predictive Analytics Dashboard',
    summary: 'Real-time analytics platform predicting sales trends and inventory optimization.',
    problem: 'Businesses lacked real-time insights into inventory and sales patterns.',
    solution: 'Developed ML-powered dashboard with predictive models for demand forecasting.',
    impact: 'Inventory costs reduced by 30%, sales forecasting accuracy improved to 92%.',
    technologies: ['Python', 'Scikit-learn', 'D3.js', 'PostgreSQL'],
    year: 2025,
    featured: true
  },
  {
    id: 'document-processing-ai',
    title: 'Automated Document Processing',
    summary: 'AI-powered system for extracting and processing data from unstructured documents.',
    problem: 'Manual document processing was time-consuming and error-prone.',
    solution: 'Implemented OCR and NLP pipeline with automated data extraction and validation.',
    impact: 'Processing time reduced by 90%, accuracy improved to 98%.',
    technologies: ['Python', 'OpenCV', 'Tesseract', 'FastAPI', 'MongoDB'],
    year: 2024,
    featured: true
  }
];

export const featuredPortfolio = portfolio.filter(p => p.featured);

// Value propositions – professional, benefit-oriented
export const valueProps: ValueProp[] = [
  {
    id: 'velocity',
    title: 'Execution Velocity',
    summary: 'Compressed idea → deploy cycles.',
    detail: 'Prototype in days. Prove value fast. Scale what works.'
  },
  {
    id: 'reliability',
    title: 'Operational Reliability',
    summary: 'Production controls from day zero.',
    detail: 'Obs, rollback paths & drift watch baked into pipelines.'
  },
  {
    id: 'clarity',
    title: 'Transparent Collaboration',
    summary: 'Clear status. No surprises.',
    detail: 'Lightweight dashboards surface progress, risks & decisions.'
  },
  {
    id: 'ownership',
    title: 'Capability Transfer',
    summary: 'No black boxes left behind.',
    detail: 'Docs, patterns & enablement so your team owns outcomes.'
  }
];

// Delivery process – concise, outcome-aligned
export const processSteps: ProcessStep[] = [
  { 
    id: 'discover', 
    title: 'Discover', 
    summary: 'Discover what your goals are, who it\'s for, and what success looks like. We\'ll align on what really matters before diving into design.',
    deliverable: 'Problem & value brief',
    visual: false
  },
  { 
    id: 'design', 
    title: 'Design', 
    summary: 'Design a site that looks sharp and feels like you. You\'ll see a few visual directions so we can quickly align on the right one.',
    deliverable: 'Visual mockups',
    visual: true
  },
  { 
    id: 'build', 
    title: 'Build', 
    summary: 'Build a site that\'s fast, stable, and easy to update. No messy code or bloated templates – just clean Webflow structure built to last.',
    deliverable: 'Production site',
    visual: true
  },
  { 
    id: 'launch', 
    title: 'Launch', 
    summary: 'Launch with confidence, knowing the site is responsive, fast, and easy to grow. I\'ll also be on hand to support you post-launch.',
    deliverable: 'Live website + support',
    visual: true
  }
];

// Metrics – intentionally generic placeholders (replace with real data when available)
export const metrics: MetricStat[] = [
  { id: 'cycle', label: 'Prototype Cycle', value: '≤ 10d', help: 'Target from scoped brief to functional demo' },
  { id: 'defect', label: 'Deployment Quality', value: '95%+', help: 'Change success rate emphasis' },
  { id: 'handoff', label: 'Knowledge Artifacts', value: '100%', help: 'Engagements with docs & runbooks delivered' },
  { id: 'uptime', label: 'Pipeline Uptime', value: '99%+', help: 'Critical job success over trailing 90 days (goal)' }
];

// Testimonials – placeholders; replace with real client statements
export const testimonials: Testimonial[] = [
  {
    id: 'tech-ceo',
    quote: 'Naitrons did an absolutely stellar job on our new website. From creative approach to visuals to execution, everything was on point and better than our team expected. I highly recommend them to anyone who needs a cool, great looking, polished product.',
    author: 'Olga Gomonova',
    role: 'CEO',
    company: 'TechFlow Solutions'
  },
  {
    id: 'startup-founder',
    quote: 'Working with this team was a game-changer for our startup. They delivered a stunning website that perfectly captures our brand identity.',
    author: 'Marcus Chen',
    role: 'Founder',
    company: 'InnovateLabs'
  },
  {
    id: 'marketing-director',
    quote: 'The attention to detail and commitment to quality exceeded our expectations. Our new site has significantly improved user engagement.',
    author: 'Sarah Williams',
    role: 'Marketing Director',
    company: 'GrowthPro'
  }
];

export const ctaCopy = {
  heading: 'Ready to accelerate an AI initiative?',
  body: 'Book a focused technical discovery session—no pitch theatre, just pragmatic insight on feasibility and path to value.',
  primaryLabel: 'Request discovery call',
  primaryHref: '#contact',
  secondaryLabel: 'View capabilities',
  secondaryHref: '#services'
};

// Benefits data
export const benefits: Benefit[] = [
  {
    id: 'look-bigger',
    title: 'Look 10x bigger',
    description: 'Professional design that makes you feel established from day one.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    id: 'transparent-pricing',
    title: 'Transparent pricing',
    description: 'All projects are fixed scope with upfront pricing, so there\'s no surprises.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 'reliable-timelines',
    title: 'Reliable timelines',
    description: 'Webflow streamlines development, so most projects launch in 4-6 weeks.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 'thoughtful-design',
    title: 'Thoughtful design',
    description: 'We focus on clear, intuitive design that makes your product easy to understand.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    id: 'industry-experience',
    title: 'Industry experience',
    description: 'We have built multiple successful web solutions that we maintain and update regularly.',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    id: 'satisfaction-guaranteed',
    title: 'Satisfaction guaranteed',
    description: 'If you\'re unhappy with the work we produce in the first week, we\'ll refund half the deposit.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  }
];

// FAQs data
export const faqs: FAQ[] = [
  {
    id: 'have-designs',
    question: 'I already have the designs, can you develop them?',
    answer: 'Yes! If you have existing designs, I can develop them in Webflow or Next.js. We\'ll review the designs together to ensure they\'re technically feasible and optimized for the web.'
  },
  {
    id: 'work-with-someone-else',
    question: 'What if I want to work with someone else after the website is built?',
    answer: 'No problem! I build sites with clean, well-documented code that any developer can work with. For Webflow sites, you\'ll have full access to edit and update everything yourself, or work with another Webflow developer.'
  },
  {
    id: 'quick-call',
    question: 'Can we have a quick call to see if we\'re a good fit?',
    answer: 'Absolutely! I offer a free 30-minute consultation call where we can discuss your project, timeline, and goals. Just fill out the contact form and I\'ll send you a calendar link.'
  }
];
