export type Service = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  heroImage: string;
  benefitsHeading: string;
  benefitsIntro: string;
  benefits: { title: string; body: string }[];
  benefitImage: string;
  quote: { text: string; author: string; company: string; avatar: string };
};

export const services: Service[] = [
  {
    slug: "ai-strategy",
    name: "AI Strategy",
    blurb: "We help you find chances for AI use and put the tools into your business.",
    description:
      "We help organizations understand where AI creates the most impact and how to adopt it effectively. Through strategic analysis, opportunity mapping, and technology guidance, we design a step-by-step plan for intelligent transformation.",
    heroImage: "/assets/img/212a7222c003058d.webp",
    benefitsHeading: "The Benefits of a Solid AI Strategy",
    benefitsIntro:
      "A well-defined AI strategy gives your organization clarity, direction, and measurable impact on your operations and future growth.",
    benefits: [
      {
        title: "Clear Direction for AI Adoption",
        body: "Gain a structured, step-by-step roadmap that removes uncertainty and helps you adopt AI with confidence and purpose.",
      },
      {
        title: "Reduced Operational Costs",
        body: "Identify and automate costly manual processes, freeing up resources and maximizing efficiency across departments.",
      },
      {
        title: "Sustainable Competitive Edge",
        body: "Move beyond pilot projects to implement scalable AI solutions that differentiate your brand and boost market responsiveness.",
      },
      {
        title: "Enhanced Data Governance",
        body: "Establish frameworks to ensure AI deployment is ethical, compliant, and secure from day one.",
      },
    ],
    benefitImage: "/assets/img/752a828daa27e2a5.webp",
    quote: {
      text: "They brought clarity to complex problems, breaking down barriers and delivering innovative AI solutions.",
      author: "Elara Vance",
      company: "Aura Insights",
      avatar: "/assets/img/b1cfccfca49b66c1.webp",
    },
  },
  {
    slug: "business-consulting",
    name: "Business Consulting",
    blurb: "We lead your change with smart plans, pushing growth and making work simple.",
    description:
      "We partner with leadership to unlock organizational potential. Our consulting approach integrates deep business acumen with advanced analytical techniques to solve complex challenges, optimize workflows, and prepare your company for the future of work. We focus on impact and measurable results.",
    heroImage: "/assets/img/aa9b7ae88c315df8.webp",
    benefitsHeading: "The Benefits of Business Consulting",
    benefitsIntro:
      "Effective business consulting is the catalyst for profound and lasting change, optimizing every aspect of your organization for peak performance.",
    benefits: [
      {
        title: "Optimized Operational Efficiency",
        body: "Streamline core processes by eliminating bottlenecks and leveraging technology for faster service delivery, increasing operational performance.",
      },
      {
        title: "Strategic Market Positioning Now",
        body: "Define a strong market strategy that captures new revenue streams and solidifies brand loyalty through competitive clarity fast.",
      },
      {
        title: "Advanced Data-Driven Decisions",
        body: "Shift from intuition to deep insight by establishing governance and analytical tools backed by solid, verifiable data immediately.",
      },
      {
        title: "Enhanced Organizational Agility",
        body: "Develop a truly flexible structure ready to adapt quickly to market shifts and technological disruptions easily and fast.",
      },
    ],
    benefitImage: "/assets/img/f8c98fef9dfe2198.webp",
    quote: {
      text: "The team brought fresh perspectives, breaking down barriers and delivering innovative solutions for growth.",
      author: "Darius Jones",
      company: "Vantage Tech",
      avatar: "/assets/img/10b6f6de9a14f864.webp",
    },
  },
  {
    slug: "data-insights",
    name: "Data & Insights",
    blurb: "We turn your raw data into clear value using solid rules and great models.",
    description:
      "Data is your most valuable asset. We build the data architecture, machine learning models, and visualization layers needed to extract deep, meaningful insights. From data warehousing to advanced predictive analytics, we ensure your data ecosystem is reliable, scalable, and directly tied to business outcomes.",
    heroImage: "/assets/img/ae47c10680b6ab36.webp",
    benefitsHeading: "The Benefits of Powering Data & Insights",
    benefitsIntro:
      "Harnessing your data correctly transforms it from simple information storage into a powerful engine for innovation and competitive edge.",
    benefits: [
      {
        title: "Discover New Opportunities Now",
        body: "Utilize advanced analytics to spot patterns in customer behavior and demand forecasting previously invisible to your key internal teams.",
      },
      {
        title: "Centralized Data Reliability Fast",
        body: "Implement unified data architecture to eliminate data silos for a single, accurate source of truth immediately.",
      },
      {
        title: "Advanced Predictive Forecasting",
        body: "Move beyond retrospective reporting to forecasting future market trends, allowing for proactive and effective risk management early.",
      },
      {
        title: "Enhanced User Personalization",
        body: "Use granular insights to tailor product offerings and service interactions, greatly boosting customer lifetime value now.",
      },
    ],
    benefitImage: "/assets/img/53f87b75ee5d642c.webp",
    quote: {
      text: "Their data platform transformed our raw data into real-time, actionable insights, dramatically improving our marketing efficiency.",
      author: "Mark Rilley",
      company: "Nexus Corp.",
      avatar: "/assets/img/032d505a6086ee19.webp",
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
