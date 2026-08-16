import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCards } from "@/components/PricingCards";
import { Accordion } from "@/components/Accordion";
import { CtaBanner } from "@/components/CtaBanner";
import { faq } from "@/lib/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Whether you’re just starting your AI journey or scaling enterprise-wide innovation, we offer tailored solutions that grow with you.",
};

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 pb-12 pt-20">
        <SectionHeading
          eyebrow="Pricing"
          title="Flexible Plans Built for Every Stage of Growth"
          sub="Whether you’re just starting your AI journey or scaling enterprise-wide innovation, we offer tailored solutions that grow with you."
        />
        <Reveal className="mt-8 flex justify-center">
          <Button href="/contact">Get Started</Button>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-4">
        <PricingCards />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          sub="Everything you need to know about our consulting and AI solutions — from strategy to implementation."
        />
        <Reveal className="mt-12">
          <Accordion items={faq} />
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}
