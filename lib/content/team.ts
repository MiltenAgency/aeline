export type Member = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  portrait: string;
  socials: { label: string; href: string; handle: string }[];
};

export const team: Member[] = [
  {
    slug: "zaire-dorwart",
    name: "Zaire Dorwart",
    role: "CEO & Founder",
    bio: "Zaire is the CEO and Founder of our agency. With more than 20 years of experience in the Consulting, He started this company with a vision: to make business simple, transparent, and truly centered around people.",
    photo: "/assets/img/515c4c6bf295b0d1.webp",
    portrait: "/assets/img/team-zaire-portrait.png",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", handle: "Zaire Dorwart" },
      { label: "X", href: "https://x.com", handle: "@zairedorwart" },
      { label: "Instagram", href: "https://instagram.com", handle: "@zairedorwart" },
    ],
  },
  {
    slug: "cheyenne-george",
    name: "Cheyenne George",
    role: "Head of AI Strategy",
    bio: "Cheyenne leads the development of our client-facing AI roadmaps and integration projects. Her expertise in Machine Learning ensures our solutions drive measurable impact and future-proof client operations.",
    photo: "/assets/img/a9533ecb69791c67.webp",
    portrait: "/assets/img/team-cheyenne-portrait.png",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", handle: "Cheyenne George" },
      { label: "X", href: "https://x.com", handle: "@cheyennegeorge" },
      { label: "Instagram", href: "https://instagram.com", handle: "@cheyennegeorge" },
    ],
  },
  {
    slug: "jaylon-calzoni",
    name: "Jaylon Calzoni",
    role: "VP of Business Transformation",
    bio: "Jaylon specializes in organizational restructuring and operational efficiency. He uses data-driven insights to help companies optimize workflows and achieve scalable growth beyond technological implementation.",
    photo: "/assets/img/3b5d9dec05e6e619.webp",
    portrait: "/assets/img/team-jaylon-portrait.png",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", handle: "Jaylon Calzoni" },
      { label: "X", href: "https://x.com", handle: "@jayloncalzoni" },
      { label: "Instagram", href: "https://instagram.com", handle: "@jayloncalzoni" },
    ],
  },
  {
    slug: "erin-siphron",
    name: "Erin Siphron",
    role: "Chief Data Scientist",
    bio: "Erin is responsible for designing the robust data architecture and predictive models that power our Data & Insights service. She transforms complex raw data into clear, actionable intelligence.",
    photo: "/assets/img/8c2a9925e4926d4b.webp",
    portrait: "/assets/img/team-erin-portrait.png",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", handle: "Erin Siphron" },
      { label: "X", href: "https://x.com", handle: "@erinsiphron" },
      { label: "Instagram", href: "https://instagram.com", handle: "@erinsiphron" },
    ],
  },
];

export const getMember = (slug: string) => team.find((m) => m.slug === slug);
