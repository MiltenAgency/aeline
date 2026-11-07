"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/content/services";

const serviceIcons = [
  // Wind Platform / Rotor Icon
  <svg key="0" className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v7M12 15v7M2 12h7M15 12h7" />
  </svg>,
  // Wave / Marine Icon
  <svg key="1" className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12c3-3 6-3 10 0s7 3 10 0M2 17c3-3 6-3 10 0s7 3 10 0" />
  </svg>,
  // Grid Telemetry Icon
  <svg key="2" className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>,
];
const cardTags = ["18.5 MW PLATFORMS", "AEROELASTIC ROTORS", "SUBSEA HVDC GRID"];
const cardImages = [
  "/assets/img/offshore/service-turbine.jpg",
  "/assets/img/offshore/service-blade.jpg",
  "/assets/img/offshore/service-subsea.jpg",
];

const cardRevealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.08,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export function ServiceCards() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-col lg:flex-row gap-5 rounded-panel bg-mist p-5 items-stretch w-full">
      {services.map((service, index) => {
        const isActive = activeIndex === index;
        return (
          <motion.div
            key={service.slug}
            layout
            variants={cardRevealVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-card bg-paper p-8 shadow-sm transition-all duration-300 hover:shadow-md min-h-[380px] cursor-pointer ${
              isActive ? "lg:flex-[2.2]" : "lg:flex-1"
            }`}
          >
            <Link
              href={`/our-services/${service.slug}`}
              className="flex h-full flex-col justify-between w-full"
            >
              <div className="flex h-full flex-col justify-between md:flex-row md:items-stretch w-full">
                {/* Text Content Area */}
                <div className="flex flex-1 flex-col justify-between h-full min-w-0">
                  <div>
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime text-white shadow-sm"
                      aria-hidden
                    >
                      {serviceIcons[index]}
                    </span>
                    <h3 className="mt-6 font-sans text-2xl font-medium tracking-[-0.04em] text-ink lg:text-3xl transition-colors duration-300 group-hover:text-ink/80">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-fog">
                      {service.blurb}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3 pt-4 border-t border-line/60">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mist text-ink transition-all duration-300 group-hover:scale-110 group-hover:bg-lime group-hover:text-white">
                      <svg className="h-3.5 w-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-fog">
                      {cardTags[index]}
                    </span>
                  </div>
                </div>

                {/* Right Side Image (Expands dynamically on Active/Hover state) */}
                <motion.div
                  initial={false}
                  animate={{
                    width: isActive ? "48%" : "0%",
                    opacity: isActive ? 1 : 0,
                    marginLeft: isActive ? "1.5rem" : "0rem",
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative hidden md:block overflow-hidden rounded-xl bg-mist shrink-0 self-stretch"
                >
                  <Image
                    src={cardImages[index]}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index === 0}
                  />
                </motion.div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

