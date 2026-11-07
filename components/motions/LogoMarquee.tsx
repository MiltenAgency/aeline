import Image from "next/image";

const partnerBrands = [
  { name: "Vestas", src: "/assets/logos/vestas.svg", height: 26 },
  { name: "Ørsted", src: "/assets/logos/orsted.svg", height: 28 },
  { name: "Siemens Gamesa", src: "/assets/logos/siemens-gamesa.svg", height: 26 },
  { name: "GE Vernova", src: "/assets/logos/ge-vernova.svg", height: 26 },
  { name: "Equinor", src: "/assets/logos/equinor.svg", height: 28 },
  { name: "Iberdrola", src: "/assets/logos/iberdrola.svg", height: 26 },
  { name: "RWE", src: "/assets/logos/rwe.svg", height: 26 },
];

export function LogoMarquee({
  speed = 40,
}: {
  speed?: number;
}) {
  const row = [...partnerBrands, ...partnerBrands, ...partnerBrands];
  return (
    <div className="overflow-hidden py-10 border-y border-line/30 bg-transparent select-none" aria-hidden>
      <style>{`
        @keyframes marquee-logo-motion {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-logo-marquee {
          animation: marquee-logo-motion ${speed}s linear infinite;
        }
      `}</style>
      <div className="flex w-max animate-logo-marquee items-center gap-16 sm:gap-24">
        {row.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-10 min-w-[120px] transition-opacity duration-300 opacity-70 hover:opacity-100"
          >
            <Image
              src={item.src}
              alt={item.name}
              width={140}
              height={item.height}
              className="h-7 sm:h-8 w-auto max-w-[140px] object-contain brightness-90 hover:brightness-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
