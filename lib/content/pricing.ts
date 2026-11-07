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
    name: "Pre-Feasibility Study",
    description: "Comprehensive offshore wind site characterization, floating LiDAR metocean telemetry, and CAPEX/OPEX modeling.",
    price: "$45,000.00",
    period: "/study",
    features: [
      "Floating LiDAR & satellite metocean telemetry",
      "Bathymetry & seabed geohazard assessment",
      "Preliminary Annual Energy Production (AEP)",
      "LCOE sensitivity & coastal grid interconnect review",
    ],
  },
  {
    name: "FEED & Array Design",
    description: "Full Front-End Engineering Design including turbine micro-siting, wake loss CFD, and subsea cable routing.",
    price: "$180,000.00",
    period: "/array",
    features: [
      "3D CFD wake loss & turbulence array modeling",
      "Geotechnical foundation & mooring design",
      "Subsea HVDC cable & dynamic riser simulation",
      "Bankable P50/P90 energy yield certification",
    ],
    featured: true,
  },
  {
    name: "Turnkey EPC & Commissioning",
    description: "End-to-end engineering procurement, heavy-lift installation supervision, and high-voltage grid commissioning.",
    price: "Custom",
    period: "/utility-scale",
    features: [
      "Heavy-lift installation vessel charter oversight",
      "Turbine nacelle port staging & assembly management",
      "Offshore substation & SCADA telemetry integration",
      "24/7 Marine Operations Center (MOC) monitoring",
    ],
  },
];

export const faq = [
  {
    q: "What water depths do Zephyr turbine platforms support?",
    a: "Our fixed-bottom monopile and jacket structures are optimized for depths from 20m to 55m. For deepwater projects between 50m and 350m, we deploy our proprietary semi-submersible and tension-leg floating foundations.",
  },
  {
    q: "How do you mitigate wake losses in dense offshore arrays?",
    a: "We utilize high-fidelity computational fluid dynamics (CFD) and predictive yaw steering to deflect turbine wakes away from downstream units, reclaiming up to 4.5% of cluster-wide energy that would otherwise be lost to turbulence.",
  },
  {
    q: "What is the typical timeline for an offshore FEED package?",
    a: "A standard Front-End Engineering Design package takes between 14 to 20 weeks, depending on existing metocean datasets and geotechnical borehole availability for seabed profiling.",
  },
  {
    q: "How do your floating foundations handle 100-year marine storms?",
    a: "Our hulls feature active ballast control and helical bilge keels that reduce hydrodynamic heave and pitch acceleration by over 40%, ensuring structural integrity even during Category 5 hurricane wind bands.",
  },
  {
    q: "Can Zephyr integrate with existing onshore utility grids?",
    a: "Yes. Our subsea grid systems include grid-forming inverters and statcom compensation that comply with IEEE 1547 and ENTSO-E grid codes, delivering seamless synchronization with terrestrial power systems.",
  },
];
