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
    slug: "offshore-turbine-platforms",
    name: "Offshore Turbine Platforms",
    blurb: "15–20 MW modular direct-drive nacelles and deepwater semi-submersible floating foundations.",
    description:
      "We engineer industrial-grade offshore wind turbine platforms capable of generating up to 20 MW per unit. From tension-leg spar buoys to multi-column semi-submersible floating foundations, our structural and hydrodynamic models optimize stability in 100-year marine storm regimes.",
    heroImage: "/assets/img/light/hero-daylight.jpg",
    benefitsHeading: "Engineering Advantages of Next-Gen Platforms",
    benefitsIntro:
      "Our platform engineering integrates hydrodynamic dampening, modular heavy-lift nacelles, and automated yaw systems designed for extreme ocean conditions.",
    benefits: [
      {
        title: "High-Capacity Direct Drive Generation",
        body: "Permanent magnet direct-drive generators eliminate high-maintenance gearboxes, maximizing uptime in offshore environments.",
      },
      {
        title: "Deepwater Floating Scalability",
        body: "Engineered for water depths exceeding 80 meters where 80% of global marine wind resources reside.",
      },
      {
        title: "Condition-Based SCADA Telemetry",
        body: "Real-time structural health monitoring sensors embedded throughout the tower and nacelle chassis.",
      },
      {
        title: "30-Year Offshore Fatigue Life",
        body: "Advanced marine coatings and cathodic corrosion protection engineered for three decades of continuous deployment.",
      },
    ],
    benefitImage: "/assets/img/light/turbines-arc.jpg",
    quote: {
      text: "Zephyr Dynamics' floating turbine designs allowed us to tap into deep North Sea wind corridors previously deemed unviable.",
      author: "Henrik Lindqvist",
      company: "Celtic Sea Renewables",
      avatar: "/assets/img/b1cfccfca49b66c1.webp",
    },
  },
  {
    slug: "aerodynamic-blade-design",
    name: "Aerodynamic Blade Design",
    blurb: "120m+ carbon-reinforced aeroelastic blades engineered for maximum swept area and acoustic dampening.",
    description:
      "Our aerodynamic engineering team designs ultra-long composite rotor blades with integrated passive aeroelastic twist. Combining computational fluid dynamics (CFD) with structural carbon pultrusions, we achieve class-leading power coefficients while minimizing fatigue loads on the tower assembly.",
    heroImage: "/assets/img/light/turbine-blades-sky.jpg",
    benefitsHeading: "Aerodynamic Efficiency & Durability",
    benefitsIntro:
      "Optimizing rotor aerodynamics balances maximum wind capture with structural resilience against violent gusts and turbulent oceanic weather.",
    benefits: [
      {
        title: "Extended 126-Meter Rotor Swept Area",
        body: "Captures low and high-speed wind bands to deliver industry-leading capacity factors exceeding 62%.",
      },
      {
        title: "Passive Aeroelastic Load Alleviation",
        body: "Tailored composite layups naturally twist and shed peak aerodynamic loads during extreme marine squalls.",
      },
      {
        title: "Recyclable Thermoplastic Bio-Resins",
        body: "Constructed with circular resin matrix systems that facilitate complete end-of-lifecycle blade recycling.",
      },
      {
        title: "Leading-Edge Marine Erosion Shielding",
        body: "Nanopolymer leading-edge protection resisting high-velocity saltwater droplet erosion and UV degradation.",
      },
    ],
    benefitImage: "/assets/img/light/clean-horizon.jpg",
    quote: {
      text: "Their blade twist geometry yielded a 6.2% annual energy production uplift across our 800 MW offshore cluster.",
      author: "Astrid Visser",
      company: "Nordic Offshore Wind",
      avatar: "/assets/img/a9533ecb69791c67.webp",
    },
  },
  {
    slug: "subsea-grid-integration",
    name: "Subsea Grid Integration",
    blurb: "High-voltage direct current (HVDC) subsea export cabling and offshore substation architectures.",
    description:
      "Delivering massive offshore wind power to coastal population centers requires ultra-low loss transmission infrastructure. We design offshore HVDC converter platforms, dynamic inter-array subsea cable topologies, and shore landfall connections that ensure 99.98% grid reliability.",
    heroImage: "/assets/img/light/floating-wind.jpg",
    benefitsHeading: "High-Voltage Reliability from Ocean to Shore",
    benefitsIntro:
      "Our power transmission engineers ensure frictionless synchronization with terrestrial electricity grids through state-of-the-art subsea array architecture.",
    benefits: [
      {
        title: "66kV & 525kV Subsea Cable Topologies",
        body: "Armored inter-array and export cabling engineered to survive seabed scour, bottom currents, and anchor impacts.",
      },
      {
        title: "Dynamic Inter-Array Riser Cables",
        body: "Flexible lazy-S and steep-S riser configurations engineered for extreme cyclic motion on floating platforms.",
      },
      {
        title: "Offshore Floating Substation Architecture",
        body: "Compact, weatherproof converter stations housing GIS switchgear and gas-insulated transformers offshore.",
      },
      {
        title: "Grid Synchronization & Reactive Compensation",
        body: "Advanced grid-forming inverters providing synthetic inertia and frequency response for mainland grid stability.",
      },
    ],
    benefitImage: "/assets/img/light/bright-ocean.jpg",
    quote: {
      text: "Subsea cable reliability is the backbone of offshore wind economics. Zephyr's engineering precision is unmatched in the marine energy sector.",
      author: "Dr. Marcus Vance",
      company: "Atlantic Interconnect",
      avatar: "/assets/img/10b6f6de9a14f864.webp",
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
