import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignCls}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className="text-3xl sm:text-4xl lg:text-[3rem] lg:leading-[3.5rem]">{title}</h2>
      {sub && <p className="mt-4 text-base leading-6 tracking-[-0.02em] text-fog">{sub}</p>}
    </Reveal>
  );
}
