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
    role: "CEO & Principal Naval Architect",
    bio: "Zaire brings over 22 years of experience in marine hydrodynamics and offshore energy. He founded Zephyr Dynamics with a single mission: to unlock deepwater floating wind energy at industrial utility scale.",
    photo: "/assets/img/515c4c6bf295b0d1.webp",
    portrait: "/assets/img/team-zaire-portrait.png",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", handle: "Zaire Dorwart" },
      { label: "X", href: "https://x.com", handle: "@zairedorwart" },
    ],
  },
  {
    slug: "cheyenne-george",
    name: "Cheyenne George",
    role: "VP of Aerodynamics & Blade Design",
    bio: "Cheyenne leads rotor blade structural design and computational fluid dynamics. With a background in advanced aerospace composites, she pioneers passive aeroelastic load-shedding blades exceeding 120 meters.",
    photo: "/assets/img/a9533ecb69791c67.webp",
    portrait: "/assets/img/team-cheyenne-portrait.png",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", handle: "Cheyenne George" },
      { label: "X", href: "https://x.com", handle: "@cheyennegeorge" },
    ],
  },
  {
    slug: "jaylon-calzoni",
    name: "Jaylon Calzoni",
    role: "VP of Marine Logistics & Offshore EPC",
    bio: "Specializing in heavy-lift vessel operations, deepwater mooring, and port mobilization, Jaylon oversees the turnkey offshore deployment and installation management of multi-gigawatt wind arrays.",
    photo: "/assets/img/3b5d9dec05e6e619.webp",
    portrait: "/assets/img/team-jaylon-portrait.png",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", handle: "Jaylon Calzoni" },
      { label: "X", href: "https://x.com", handle: "@jayloncalzoni" },
    ],
  },
  {
    slug: "erin-siphron",
    name: "Erin Siphron",
    role: "Chief Metocean & Hydrodynamic Modeler",
    bio: "Erin designs numerical wave-structure interaction algorithms and floating LiDAR telemetry systems that simulate 100-year marine storm fatigue and cluster-wide wake loss reduction.",
    photo: "/assets/img/8c2a9925e4926d4b.webp",
    portrait: "/assets/img/team-erin-portrait.png",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", handle: "Erin Siphron" },
      { label: "X", href: "https://x.com", handle: "@erinsiphron" },
    ],
  },
];

export const getMember = (slug: string) => team.find((m) => m.slug === slug);
