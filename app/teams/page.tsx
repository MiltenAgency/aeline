import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamGrid } from "@/components/TeamGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { team } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: "The naval architects, aerodynamicists, and marine engineers pioneering Zephyr Dynamics.",
};

export default function TeamsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 pb-24 pt-40">
        <SectionHeading
          eyebrow="Leadership"
          title="Marine Architects & Power Engineers"
          sub="The multidisciplinary naval architects, composite aerodynamicists, and offshore EPC leaders pioneering Zephyr Dynamics."
        />
        <div className="mt-14">
          <TeamGrid members={team} />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
