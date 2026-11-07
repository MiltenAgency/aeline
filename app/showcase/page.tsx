"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

// ─── Import All 16 Preloaders ────────────────────────────────────────────────
import {
  CounterCurtainPreloader,
  LiquidWavePreloader,
  WordCascadePreloader,
  SplitShutterPreloader,
  ZoomLogoPreloader,
  BlurDissolvePreloader,
  GridUnfoldPreloader,
  TextFillPreloader,
  CircleExpandPreloader,
  LineProgressCurtain,
  StaggeredColumnsPreloader,
  NoiseGrainPreloader,
  PercentageFillCirclePreloader,
  TerminalTypewriterPreloader,
  HeroExpandPreloader,
  SplitWordImagePreloader,
} from "@/components/preloaders";

// ─── Import All Motion Components ───────────────────────────────────────────
import {
  Typewriter,
  TextScramble,
  GlitchText,
  GradientText,
  FlipText,
  MorphingText,
  SpinningText,
  LetterPullUp,
  ShinyText,
  ScrollTextReveal,
  Counter,
  NumberTicker,
  MotionNumber,
  TiltCard,
  SpotlightCard,
  BorderBeam,
  CardStack,
  WobbleCard,
  PinContainer,
  Lens,
  LogoMarquee,
  Marquee3D,
  AnimatedBeam,
  Dock,
  AnimatedTabs,
  AnimatedTooltip,
  HoverBorderGradient,
  ShimmerButton,
  FollowCursor,
  Ripple,
  HeroRing,
  AuroraBackground,
  RetroGrid,
  Meteors,
  FlickeringGrid,
  Particles,
  Confetti,
} from "@/components/motions";

import ScratchCard from "@/components/scratchCard";

// Preloader definitions metadata
const PRELOADERS_LIST = [
  { id: "split-word-image", name: "Split Word & Image", desc: "Premium Framer split curtains with typography & asset zoom", Component: SplitWordImagePreloader },
  { id: "counter-curtain", name: "Counter Curtain", desc: "0-100% digital counter with dual vertical sliding curtains", Component: CounterCurtainPreloader },
  { id: "liquid-wave", name: "Liquid Wave", desc: "Fluid SVG liquid wave fill transition", Component: LiquidWavePreloader },
  { id: "word-cascade", name: "Word Cascade", desc: "Rapid cascading strategic keywords animation", Component: WordCascadePreloader },
  { id: "split-shutter", name: "Split Shutter", desc: "Horizontal camera shutter opening transition", Component: SplitShutterPreloader },
  { id: "zoom-logo", name: "Zoom Logo", desc: "Logo scaling focal zoom into full website reveal", Component: ZoomLogoPreloader },
  { id: "blur-dissolve", name: "Blur Dissolve", desc: "High-grade gaussian blur dissolve transition", Component: BlurDissolvePreloader },
  { id: "grid-unfold", name: "Grid Unfold", desc: "Geometric grid tile flip & unfold effect", Component: GridUnfoldPreloader },
  { id: "text-fill", name: "Text Fill", desc: "Watermark typography liquid fill effect", Component: TextFillPreloader },
  { id: "circle-expand", name: "Circle Expand", desc: "Iris lens circular expansion reveal", Component: CircleExpandPreloader },
  { id: "line-progress", name: "Line Progress Curtain", desc: "Minimalist neon line progress bar curtain", Component: LineProgressCurtain },
  { id: "staggered-columns", name: "Staggered Columns", desc: "Multiple staggered vertical column wipe", Component: StaggeredColumnsPreloader },
  { id: "noise-grain", name: "Noise Grain", desc: "Analogue film grain distortion reveal", Component: NoiseGrainPreloader },
  { id: "percentage-circle", name: "Percentage Fill Circle", desc: "Circular SVG stroke percentage progress timer", Component: PercentageFillCirclePreloader },
  { id: "terminal-typewriter", name: "Terminal Typewriter", desc: "Developer CLI command line typewriter sequence", Component: TerminalTypewriterPreloader },
  { id: "hero-expand", name: "Hero Expand", desc: "Hero image expansion & scale down transition", Component: HeroExpandPreloader },
];

export default function ShowcasePage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePreloaderId, setActivePreloaderId] = useState<string | null>(null);
  const [enableCursorFollow, setEnableCursorFollow] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  // Keyboard shortcut listener to close preloader preview with ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePreloaderId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const ActivePreloaderComp = PRELOADERS_LIST.find((p) => p.id === activePreloaderId)?.Component;

  // Filtering helper
  const matchesSearch = (text: string) =>
    text.toLowerCase().includes(searchQuery.toLowerCase());

  const triggerConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0d0e12] text-white selection:bg-lime selection:text-black font-sans pb-32">
      {/* Confetti overlay */}
      <Confetti trigger={confettiActive} />

      {/* ── Active Preloader Fullscreen Preview Overlay ───────────────────────── */}
      <AnimatePresence>
        {activePreloaderId && ActivePreloaderComp && (
          <div key={activePreloaderId} className="relative z-999999">
            {/* Top Dismiss Control Bar */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-1000000 flex items-center gap-4 bg-black/95 border border-white/20 px-6 py-3 rounded-full shadow-2xl">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-white">
                Previewing: <strong className="text-lime">{PRELOADERS_LIST.find(p => p.id === activePreloaderId)?.name}</strong>
              </span>
              <button
                onClick={() => setActivePreloaderId(null)}
                className="ml-2 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold px-3 py-1 rounded-full transition-colors"
              >
                Close (ESC)
              </button>
            </div>

            {/* The active Preloader component */}
            <ActivePreloaderComp onComplete={() => {}} />
          </div>
        )}
      </AnimatePresence>

      {/* Optional Cursor Follower Toggle */}
      {enableCursorFollow && (
        <FollowCursor size={36}>
          <div className="w-3 h-3 rounded-full bg-lime shadow-[0_0_12px_#84cc16]" />
        </FollowCursor>
      )}

      {/* ── Header Bar ──────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#0d0e12] border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="group flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/5 group-hover:bg-lime/20 border border-white/10 transition-colors">
                <Image
                  src="/assets/img/e71483bf6a2851df.svg"
                  alt="Aeline"
                  width={80}
                  height={24}
                  className="brightness-0 invert"
                />
              </div>
            </Link>
            <div className="h-6 w-px bg-white/15" />
            <div>
              <h1 className="text-lg font-bold tracking-tight flex items-center gap-2">
                Motion & Preloader Engine
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-lime text-black px-2 py-0.5 rounded-full">
                  70 Components
                </span>
              </h1>
              <p className="text-xs text-white/50">
                Interactive preview gallery for Aeline Framer design system
              </p>
            </div>
          </div>

          {/* Search Input & Actions */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search component..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-lime transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <svg className="h-3 w-3 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            <button
              onClick={() => setEnableCursorFollow((prev) => !prev)}
              className={`px-3 py-2 rounded-full text-xs font-mono font-semibold transition border ${
                enableCursorFollow
                  ? "bg-lime text-black border-lime"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
              }`}
            >
              Cursor: {enableCursorFollow ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: "all", label: "All Components (70)" },
            { id: "preloaders", label: "Preloaders (16)" },
            { id: "text", label: "Text & FX (11)" },
            { id: "cards", label: "Cards & 3D (8)" },
            { id: "counters", label: "Counters & Math (3)" },
            { id: "controls", label: "UI & Controls (6)" },
            { id: "sliders", label: "Sliders & Beams (3)" },
            { id: "backgrounds", label: "Canvas & FX (7)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-lime text-black shadow-[0_0_15px_#84cc16_40]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* ── Page Content Container ───────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-6 pt-10 space-y-16">
        {/* SECTION 1: PRELOADERS (16 Versions) */}
        {(activeTab === "all" || activeTab === "preloaders") && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs text-lime font-bold uppercase tracking-widest">
                  01 // FULLSCREEN REVEAL ENGINE
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                  16 Interactive Preloader Versions
                </h2>
                <p className="text-xs text-white/50 mt-1">
                  Click &apos;Trigger Preloader&apos; on any card below to preview the live fullscreen entrance animation.
                </p>
              </div>
              <span className="hidden sm:inline-block font-mono text-xs text-white/40 border border-white/10 px-3 py-1 rounded-full">
                ESC to close preview
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {PRELOADERS_LIST.filter((p) => matchesSearch(p.name) || matchesSearch(p.desc)).map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-[#13151c] rounded-2xl p-5 border border-white/10 hover:border-lime/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase font-bold text-lime bg-lime/10 px-2 py-0.5 rounded border border-lime/20">
                        {item.id}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-lime/50 group-hover:bg-lime group-hover:animate-ping" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-lime transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setActivePreloaderId(item.id)}
                    className="mt-5 w-full py-2.5 rounded-xl bg-white/5 group-hover:bg-lime group-hover:text-black text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 border border-white/10 group-hover:border-lime"
                  >
                    <span>▶ Trigger Preloader</span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: TEXT & TYPOGRAPHY MOTIONS */}
        {(activeTab === "all" || activeTab === "text") && (
          <section className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-lime font-bold uppercase tracking-widest">
                02 // KINETIC TYPOGRAPHY & TEXT FX
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                Kinetic & Masked Text Effects
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Typewriter */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Typewriter</span>
                <div className="h-20 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 text-center">
                  <Typewriter words={["Automating strategy with custom AI engines.", "Engineered for rapid scale."]} speed={50} />
                </div>
              </div>

              {/* Text Scramble */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Text Scramble</span>
                <div className="h-20 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 text-center">
                  <TextScramble text="STRATEGIC INNOVATION" />
                </div>
              </div>

              {/* Glitch Text */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Glitch Text</span>
                <div className="h-20 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 text-center">
                  <GlitchText text="AELINE AI MATRIX" />
                </div>
              </div>

              {/* Morphing Text */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Morphing Text</span>
                <div className="h-20 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 text-center">
                  <MorphingText texts={["Strategy", "Consulting", "Artificial", "Intelligence"]} />
                </div>
              </div>

              {/* Spinning Text */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Spinning Circular Text</span>
                <div className="h-20 flex items-center justify-center bg-black/40 rounded-xl p-2 border border-white/5">
                  <SpinningText text="• AELINE • AI CONSULTING " radius={35} />
                </div>
              </div>

              {/* Flip Text */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">3D Flip Text</span>
                <div className="h-20 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 text-center">
                  <FlipText words={["Design", "Transform", "Innovate", "Elevate"]} />
                </div>
              </div>

              {/* Gradient Text */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Animated Gradient Text</span>
                <div className="h-20 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 text-center text-xl font-extrabold">
                  <GradientText>Luminous Strategic Future</GradientText>
                </div>
              </div>

              {/* Shiny Text */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Shiny Metallic Text</span>
                <div className="h-20 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 text-center text-xl font-bold">
                  <ShinyText text="AELINE PREMIUM PLATFORM" />
                </div>
              </div>

              {/* Letter Pull Up */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Letter Pull Up</span>
                <div className="h-20 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 text-center text-lg font-bold text-lime">
                  <LetterPullUp text="PRECISION EXECUTION" />
                </div>
              </div>

              {/* Scroll Text Reveal */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4 col-span-1 md:col-span-2">
                <span className="font-mono text-[10px] text-white/40 uppercase">Scroll Text Reveal</span>
                <div className="h-20 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 text-center">
                  <ScrollTextReveal text="Highlights text gracefully as user scrolls down the page." />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: CARDS & 3D CONTAINERS */}
        {(activeTab === "all" || activeTab === "cards") && (
          <section className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-lime font-bold uppercase tracking-widest">
                03 // 3D CARDS & INTERACTIVE CONTAINERS
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                Cards, Lens & Interactive Containers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gold Scratch Card */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4 col-span-1 md:col-span-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-lime uppercase font-bold">
                    Interactive Gold Scratch Card (Canvas & Reveal)
                  </span>
                  <span className="text-xs text-white/50">Scratch with mouse or finger to reveal reward</span>
                </div>
                <div className="h-64 w-full flex items-center justify-center bg-black/60 rounded-xl p-2 border border-white/10">
                  <ScratchCard topText="Scratch to Reveal Promo" />
                </div>
              </div>

              {/* Card Stack */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Rotating Card Stack</span>
                <div className="h-64 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 overflow-hidden">
                  <CardStack
                    items={[
                      { id: 1, name: "Sarah Chen", designation: "AI Architect", content: "Aeline doubled our operational speed." },
                      { id: 2, name: "Marcus Vance", designation: "CTO @ Orbit", content: "The motion engine is next-level." },
                      { id: 3, name: "Elena Rostova", designation: "Lead Strategist", content: "Unmatched clarity and execution." },
                    ]}
                  />
                </div>
              </div>

              {/* Tilt Card */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">3D Inertia Tilt Card</span>
                <div className="h-56 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <TiltCard className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-6 border border-white/10 flex flex-col justify-between">
                    <span className="text-lime text-xs font-mono">HOVER ME</span>
                    <div>
                      <h4 className="text-lg font-bold text-white">Interactive 3D Tilt</h4>
                      <p className="text-xs text-white/50 mt-1">Responds dynamically to cursor angle</p>
                    </div>
                  </TiltCard>
                </div>
              </div>

              {/* Spotlight Card */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Spotlight Mouse Card</span>
                <div className="h-56 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <SpotlightCard className="w-full h-full bg-zinc-900 rounded-xl p-6 border border-white/10 flex flex-col justify-between">
                    <span className="text-sky-400 text-xs font-mono">SPOTLIGHT</span>
                    <div>
                      <h4 className="text-lg font-bold text-white">Radial Cursor Glow</h4>
                      <p className="text-xs text-white/50 mt-1">Light source follows mouse movement</p>
                    </div>
                  </SpotlightCard>
                </div>
              </div>

              {/* Border Beam */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Animated Border Beam</span>
                <div className="h-56 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 relative overflow-hidden">
                  <div className="relative w-full h-full bg-zinc-900 rounded-xl p-6 border border-white/10 flex flex-col justify-between">
                    <BorderBeam size={150} duration={8} delay={0} colorFrom="#84cc16" colorTo="#06b6d4" />
                    <span className="text-lime text-xs font-mono">LASER BEAM</span>
                    <div>
                      <h4 className="text-lg font-bold text-white">Infinite Border Tracer</h4>
                      <p className="text-xs text-white/50 mt-1">Smooth glowing perimeter beam</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wobble Card */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">3D Wobble Card</span>
                <div className="h-56 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <WobbleCard className="w-full h-full bg-gradient-to-tr from-purple-900/60 to-zinc-900 rounded-xl p-6 border border-purple-500/20">
                    <h4 className="text-lg font-bold text-white">Spring Wobble</h4>
                    <p className="text-xs text-white/50 mt-1">Elastic spring distortion on mouse enter</p>
                  </WobbleCard>
                </div>
              </div>

              {/* Pin Container */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">3D Pin Container</span>
                <div className="h-56 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <PinContainer title="visit aeline.com">
                    <div className="flex flex-col p-4 tracking-tight text-[#121212] w-56 h-32 bg-[#121212] border border-white/10 rounded-xl">
                      <span className="text-white text-sm font-bold">Strategic AI</span>
                      <span className="text-white/50 text-xs mt-1">Hover to pop up 3D perspective pin</span>
                    </div>
                  </PinContainer>
                </div>
              </div>

              {/* Lens Magnifier */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Lens Magnifier</span>
                <div className="h-56 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5 overflow-hidden">
                  <Lens zoomFactor={1.8} lensSize={120}>
                    <div className="p-6 bg-gradient-to-r from-lime/20 via-sky-500/20 to-purple-500/20 rounded-xl text-center border border-white/10">
                      <span className="text-xs font-mono text-lime">HOVER TO MAGNIFY</span>
                      <h4 className="text-xl font-extrabold text-white mt-1">High Precision Zoom</h4>
                    </div>
                  </Lens>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: COUNTERS & MATH */}
        {(activeTab === "all" || activeTab === "counters") && (
          <section className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-lime font-bold uppercase tracking-widest">
                04 // NUMERICAL TICKERS & METRICS
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                Animated Counters & Number Tickers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Counter */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Spring Counter</span>
                <div className="h-32 flex flex-col items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <span className="text-4xl font-extrabold text-lime font-mono">
                    <Counter to={5000000} prefix="$" duration={2.5} />
                  </span>
                  <span className="text-xs text-white/50 mt-1">Value Generated</span>
                </div>
              </div>

              {/* Number Ticker */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Number Ticker</span>
                <div className="h-32 flex flex-col items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    <NumberTicker value={99} />.8%
                  </span>
                  <span className="text-xs text-white/50 mt-1">Precision Accuracy</span>
                </div>
              </div>

              {/* Motion Number */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Motion Number</span>
                <div className="h-32 flex flex-col items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <span className="text-4xl font-extrabold text-sky-400 font-mono">
                    <MotionNumber value={4200} />+
                  </span>
                  <span className="text-xs text-white/50 mt-1">Active AI Models</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 5: UI & INTERACTIVE CONTROLS */}
        {(activeTab === "all" || activeTab === "controls") && (
          <section className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-lime font-bold uppercase tracking-widest">
                05 // INTERACTIVE UI & CONTROLS
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                Buttons, Tooltips, Tabs & Confetti
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Confetti Trigger */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Canvas Confetti Cannon</span>
                <div className="h-32 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <button
                    onClick={triggerConfetti}
                    className="px-6 py-2.5 rounded-full bg-lime text-black font-mono font-bold text-xs hover:scale-105 active:scale-95 transition"
                  >
                    Fire Confetti Burst
                  </button>
                </div>
              </div>

              {/* Shimmer Button */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Shimmer Laser Button</span>
                <div className="h-32 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium tracking-widest text-white">
                      SHIMMER BUTTON
                    </span>
                  </ShimmerButton>
                </div>
              </div>

              {/* Hover Border Gradient */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Hover Border Gradient</span>
                <div className="h-32 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <HoverBorderGradient containerClassName="rounded-full" className="bg-black text-white px-6 py-2">
                    <span>Gradient Border</span>
                  </HoverBorderGradient>
                </div>
              </div>

              {/* Animated Tabs */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Animated Pill Tabs</span>
                <div className="h-32 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <AnimatedTabs tabs={["Overview", "Features", "Pricing"]} />
                </div>
              </div>

              {/* Animated Tooltip */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Avatar Animated Tooltip</span>
                <div className="h-32 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <AnimatedTooltip
                    items={[
                      { id: 1, name: "Alex Chen", designation: "AI Architect", image: "/assets/img/b1cfccfca49b66c1.webp" },
                      { id: 2, name: "Sarah Blake", designation: "Creative Lead", image: "/assets/img/10b6f6de9a14f864.webp" },
                      { id: 3, name: "David Kim", designation: "Strategy VP", image: "/assets/img/032d505a6086ee19.webp" },
                    ]}
                  />
                </div>
              </div>

              {/* macOS Dock */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">macOS Spring Dock</span>
                <div className="h-32 flex items-center justify-center bg-black/40 rounded-xl p-4 border border-white/5">
                  <Dock
                    items={[
                      { icon: "Z", label: "Zephyr" },
                      { icon: "W", label: "Wind" },
                      { icon: "G", label: "Grid" },
                      { icon: "P", label: "Platform" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 6: SLIDERS & MARQUEES */}
        {(activeTab === "all" || activeTab === "sliders") && (
          <section className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-lime font-bold uppercase tracking-widest">
                06 // SLIDERS, MARQUEES & BEAMS
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                Infinite Sliders, 3D Marquees & Beams
              </h2>
            </div>

            <div className="space-y-6">
              {/* 3D Marquee */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">3D Tilted Marquee</span>
                <div className="h-44 bg-black/60 rounded-xl border border-white/5 overflow-hidden flex items-center">
                  <Marquee3D
                    rows={[
                      [
                        <div key="1" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono">AI Strategy</div>,
                        <div key="2" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono">Digital Transformation</div>,
                        <div key="3" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono">Neural Systems</div>,
                      ],
                      [
                        <div key="4" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono">Cloud Scale</div>,
                        <div key="5" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono">Creative Direction</div>,
                        <div key="6" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono">Automation Engine</div>,
                      ],
                    ]}
                  />
                </div>
              </div>

              {/* Logo Marquee */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Continuous Logo Marquee</span>
                <div className="h-28 bg-black/40 rounded-xl border border-white/5 overflow-hidden flex items-center">
                  <LogoMarquee />
                </div>
              </div>

              {/* Animated Beam */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">SVG Animated Connection Beam</span>
                <div className="relative h-32 bg-black/60 rounded-xl border border-white/5 flex items-center justify-between px-12 overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-lime/20 border border-lime text-lime flex items-center justify-center font-mono font-bold text-xs">
                    SRC
                  </div>
                  <AnimatedBeam delay={0} duration={3} gradientStartColor="#84cc16" gradientStopColor="#06b6d4" />
                  <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-400 text-sky-400 flex items-center justify-center font-mono font-bold text-xs">
                    DEST
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 7: BACKGROUNDS & CANVAS FX */}
        {(activeTab === "all" || activeTab === "backgrounds") && (
          <section className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-lime font-bold uppercase tracking-widest">
                07 // CANVAS, PARTICLES & BACKGROUND FX
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                Background Shaders, Particles & 3D Ring
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hero 3D Ring */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4 overflow-hidden col-span-1 md:col-span-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-lime uppercase font-bold">
                    Hero 3D Rotating Ring of Coded Cards
                  </span>
                  <span className="text-xs text-white/50">Used in main landing page hero section</span>
                </div>
                <div className="h-72 bg-black/80 rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
                  <HeroRing />
                </div>
              </div>

              {/* Flickering Grid */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Canvas Flickering Grid</span>
                <div className="relative h-64 bg-black rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
                  <FlickeringGrid squareSize={4} gridGap={6} color="#84cc16" flickerChance={0.1} />
                  <span className="relative z-10 font-mono text-xs text-lime bg-black/80 border border-lime/40 px-3 py-1 rounded-full">
                    FLICKERING MATRIX
                  </span>
                </div>
              </div>

              {/* Retro Grid */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">3D Retro Perspective Grid</span>
                <div className="relative h-64 bg-black rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
                  <RetroGrid />
                  <span className="relative z-10 font-mono text-xs text-white bg-black/80 border border-white/20 px-3 py-1 rounded-full">
                    RETRO PERSPECTIVE
                  </span>
                </div>
              </div>

              {/* Particles */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Interactive Physics Particles</span>
                <div className="relative h-64 bg-black rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
                  <Particles quantity={60} color="#ffffff" />
                  <span className="relative z-10 font-mono text-xs text-sky-400 bg-black/80 border border-sky-400/40 px-3 py-1 rounded-full">
                    PARTICLE DUST
                  </span>
                </div>
              </div>

              {/* Ripple */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Radar Concentric Ripple</span>
                <div className="relative h-64 bg-black rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
                  <Ripple count={5} size={140} color="rgba(132,204,22,0.2)" />
                  <span className="relative z-10 font-mono text-xs text-lime bg-black/80 border border-lime/40 px-3 py-1 rounded-full">
                    CONCENTRIC RIPPLE
                  </span>
                </div>
              </div>

              {/* Meteors */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Falling Meteors Shower</span>
                <div className="relative h-64 bg-black rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
                  <Meteors number={25} />
                  <span className="relative z-10 font-mono text-xs text-purple-400 bg-black/80 border border-purple-400/40 px-3 py-1 rounded-full">
                    METEOR SHOWER
                  </span>
                </div>
              </div>

              {/* Aurora Background */}
              <div className="bg-[#13151c] rounded-2xl p-6 border border-white/10 space-y-4">
                <span className="font-mono text-[10px] text-white/40 uppercase">Aurora Wave Shader</span>
                <div className="relative h-64 bg-black rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
                  <AuroraBackground className="h-full w-full">
                    <span className="font-mono text-xs text-white bg-black/80 border border-white/20 px-3 py-1 rounded-full">
                      AURORA WAVES
                    </span>
                  </AuroraBackground>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
