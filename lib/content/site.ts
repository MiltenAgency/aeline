export const site = {
  name: "Aeline",
  title: "Aeline — AI & Strategy Consulting",
  description:
    "Aeline is a flexible consulting and AI template designed to present expertise, intelligent solutions, and strategy with a clean, modern approach.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aeline.example.com",
  copyright: "© 2025 Ailine Inc. All rights reserved.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Services", href: "/our-services" },
  { label: "Blog", href: "/blog" },
  { label: "Showcase", href: "/showcase" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "About us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/our-services" },
  { label: "Showcase", href: "/showcase" },
  { label: "Contact", href: "/contact" },
] as const;



export const contactInfo = {
  email: "consulting@aeline.com",
  phone: "+1 (123) 456-7890",
  office: "456 Business Ave, New York",
  officeMapUrl: "https://maps.app.goo.gl/fypBBWRAtpepS5vT8",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
  ],
};

export const cta = {
  eyebrow: "Trusted over 5,000+",
  heading: "We combine human insight with artificial intelligence",
  body: "Our consulting team bridges strategic thinking and advanced AI technologies to help companies streamline processes, improve decision-making, and create intelligent digital experiences.",
  avatars: [
    "/assets/img/b1cfccfca49b66c1.webp",
    "/assets/img/10b6f6de9a14f864.webp",
    "/assets/img/032d505a6086ee19.webp",
    "/assets/img/e7029c64832e9412.webp",
  ],

  background: "/assets/img/9f968bcba56c4f04.webp",
};

export const footerBlurb =
  "Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.";

export const marqueeWords = [
  "Professional",
  "Grow Faster",
  "Strategic",
  "Build Smart",
  "AI-Focused",
  "Simple",
  "Startup Feel",
  "Smarter",
];
