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
    id: 'vision-analytics',
    title: 'Vision Analytics Platform',
    summary: 'Real-time defect detection for manufacturing lines using edge-deployed vision models.',
    problem: 'High defect rates and manual inspection overhead.',
    solution: 'Deployed custom YOLO-based models with active learning loop and auto-retraining.',
    impact: 'Reduced inspection time by 65% and defects shipped by 28%.',
    technologies: ['TypeScript', 'PyTorch', 'WebGL', 'Edge Inference'],
    year: 2025,
    featured: true
  },
  {
    id: 'automation-copilot',
    title: 'Operations Copilot',
    summary: 'Context-aware assistant automating routine support tasks and knowledge lookup.',
    problem: 'High response latency for internal support and repetitive escalations.',
    solution: 'Retriever-augmented generation pipeline with tool-aware agent flows.',
    impact: 'Cut average handling time by 41% and improved first-touch resolution.',
    technologies: ['Vector DB', 'LLM Orchestration', 'Next.js', 'Server Actions'],
    year: 2025,
    featured: true
  },
  {
    id: 'realtime-visualizer',
    title: 'Realtime Data Visualizer',
    summary: '3D streaming telemetry visualization for IoT sensor networks.',
    problem: 'Operators lacked unified spatial situational awareness.',
    solution: 'WebGL scene with level-of-detail optimization and edge-pub/sub ingestion.',
    technologies: ['Three.js', 'WebSockets', 'Rust (ingestion)', 'Next.js'],
    year: 2024,
    featured: false
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
  { id: 'discover', title: 'Discover', summary: 'Clarify problem framing, success metrics, constraints.', deliverable: 'Problem & value brief' },
  { id: 'prototype', title: 'Prototype', summary: 'Rapid exploration of architecture & model viability.', deliverable: 'Technical spike + demo' },
  { id: 'deploy', title: 'Deploy', summary: 'Harden pipelines, integrate, monitor, optimize.', deliverable: 'Production release' },
  { id: 'elevate', title: 'Elevate', summary: 'Iterative improvement informed by live telemetry & feedback.', deliverable: 'Continuous enhancement plan' }
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
    id: 'ops-lead',
    quote: 'They translated an ambiguous operations pain point into a measurable automation roadmap—fast.',
    author: 'Operations Lead',
    company: 'Growth Stage SaaS'
  },
  {
    id: 'data-head',
    quote: 'Our internal team now ships models with confidence thanks to their MLOps enablement patterns.',
    author: 'Head of Data Science'
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
