import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { plans } from "@/lib/content/pricing";

const tierIcons = [
  // LiDAR / Pre-feasibility icon
  <svg key="0" className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v9l5 5" />
  </svg>,
  // Direct-Drive Platform icon
  <svg key="1" className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
  </svg>,
  // Utility EPC Fleet icon
  <svg key="2" className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
];

export function PricingCards() {
  return (
    <div className="grid gap-5 rounded-panel bg-mist p-5 md:grid-cols-3">
      {plans.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 0.08} className="h-full">
          <div className="flex h-full flex-col rounded-card bg-paper p-7">
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime text-white shadow-sm"
                aria-hidden
              >
                {tierIcons[i % tierIcons.length]}
              </span>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.12em]">{plan.name}</p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-fog">{plan.description}</p>
            <p className="mt-5">
              <span className="font-sans text-[40px] font-medium leading-[52px] tracking-[-0.06em]">{plan.price}</span>
              <span className="ml-1 text-sm text-fog">{plan.period}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-white"
                    aria-hidden
                  >
                    <svg className="h-3 w-3 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 rounded-full bg-lime hover:bg-lime-deep py-3.5 text-center font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-[1.02]"
            >
              Get Started
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
