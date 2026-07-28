export type Plan = {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter Plan",
    description: "Perfect for small teams beginning to explore AI and automation.",
    price: "$2,500.00",
    period: "/month",
    features: [
      "Strategy consultation (up to 10 hours)",
      "Business process mapping",
      "Basic AI workflow setup",
      "Email support",
    ],
  },
  {
    name: "Growth Plan",
    description: "Designed for growing companies ready to integrate AI into their operations.",
    price: "$8,500.00",
    period: "/month",
    features: [
      "Dedicated consultant and project manager",
      "End-to-end automation setup",
      "Predictive analytics dashboards",
      "AI-driven reporting & insights",
    ],
    featured: true,
  },
  {
    name: "Enterprise Plan",
    description: "Custom-built for enterprises seeking full-scale transformation optimization.",
    price: "$10,500.00",
    period: "/month",
    features: [
      "Tailored AI implementation roadmap",
      "Custom automation architecture",
      "Advanced data analytics and forecasting",
      "24/7 premium support",
    ],
  },
];

export const faq = [
  {
    q: "What types of businesses do you work with?",
    a: "We partner with organizations of all sizes — from startups to established enterprises — across industries like retail, technology, finance, manufacturing, and professional services. Our approach is flexible and tailored to fit your business model and growth stage.",
  },
  {
    q: "How does your consulting process work?",
    a: "We start with a discovery phase to understand your goals, workflows, and data landscape. From there we design a step-by-step roadmap, implement the agreed solutions alongside your team, and measure results continuously so the strategy keeps improving.",
  },
  {
    q: "What makes your AI solutions different?",
    a: "We combine strategic consulting with hands-on implementation. Instead of generic tools, we design solutions around your specific processes and data — so the AI you adopt creates measurable impact, not just another dashboard.",
  },
  {
    q: "Do I need to have technical knowledge to work with you?",
    a: "Not at all. We translate the technical complexity into clear business language and handle the implementation end to end. Your team only needs to know your business — we take care of the rest.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients see the first measurable improvements within 4–8 weeks, starting with quick automation wins. Larger transformation programs typically show compounding results over the first two quarters.",
  },
];
