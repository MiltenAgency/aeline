export const site = {
  name: "Zephyr Dynamics",
  title: "Zephyr Dynamics — Offshore Wind Turbine Engineering & Clean Power",
  description:
    "Zephyr Dynamics designs next-generation industrial offshore wind turbines, aerodynamic composite blades, and deepwater subsea grid platforms.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zephyrdynamics.example.com",
  copyright: "© 2026 Zephyr Dynamics Inc. All rights reserved.",
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
  email: "engineering@zephyrdynamics.com",
  phone: "+1 (800) 412-WIND",
  office: "800 Harborside Marine Way, Boston, MA",
  officeMapUrl: "https://maps.app.goo.gl/fypBBWRAtpepS5vT8",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "GitHub", href: "https://github.com/" },
  ],
};

export const cta = {
  eyebrow: "Over 4.8 GW Deployed Globally",
  heading: "We harness kinetic ocean gales to power clean grids worldwide",
  body: "Our multidisciplinary naval architecture and aerodynamic engineering teams pioneer high-capacity 18.5 MW offshore turbines and subsea HVDC transmission networks built to withstand extreme oceanic environments.",
  avatars: [
    "/assets/img/team-cheyenne-portrait.png",
    "/assets/img/team-erin-portrait.png",
    "/assets/img/team-jaylon-portrait.png",
    "/assets/img/team-zaire-portrait.png",
  ],
  background: "/assets/img/light/turbines-arc.jpg",
};

export const footerBlurb =
  "Empowering utility grids and coastal nations with utility-scale offshore wind platforms engineered for 30+ year lifecycle resilience in harsh marine environments.";

export const marqueeWords = [
  "Offshore Arrays",
  "18.5 MW Nacelles",
  "Aerodynamic Blades",
  "Subsea HVDC",
  "Kinetic Power",
  "Zero Emission",
  "Deepwater Floaters",
  "Clean Energy",
];
