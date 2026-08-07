import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { plans } from "@/lib/content/pricing";

const icons = ["♟", "★", "♛"];

export function PricingCards() {
  return (
    <div className="grid gap-5 rounded-panel bg-mist p-5 md:grid-cols-3">
      {plans.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 0.08} className="h-full">
          <div className="flex h-full flex-col rounded-card bg-paper p-7">
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime text-sm text-ink"
                aria-hidden
              >
                {icons[i % icons.length]}
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
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-[10px] text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 rounded-full bg-ink py-3.5 text-center font-mono text-xs font-bold uppercase tracking-wider text-lime transition-transform hover:scale-[1.02]"
            >
              Get Started
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
