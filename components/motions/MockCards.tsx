/* Offshore Wind Turbine & Marine Telemetry UI Cards
   Engineered with Unslop design craft: 4px grid spacing, tabular numbers, quiet surfaces, zero border lines */

export function TurbineCapacityCard() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-ink-soft p-3 text-white shadow-xl">
      <div className="flex items-center justify-between h-4">
        <span className="font-mono text-[8px] uppercase tracking-wider text-slate-400">Nacelle 04</span>
        <span className="inline-flex items-center gap-1 rounded bg-lime/20 px-1.5 py-0.5 text-[7px] font-mono font-medium text-lime">
          <span className="h-1 w-1 rounded-full bg-lime animate-pulse" />
          Online
        </span>
      </div>
      <div className="my-auto py-1">
        <p className="text-[17px] font-bold tracking-tight text-white tabular-nums leading-none">18.5 MW</p>
        <p className="mt-1 text-[8.5px] text-slate-400 leading-tight">Direct-Drive Rotor</p>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 pt-1 h-4 font-mono text-[8px] text-slate-300">
        <span className="tabular-nums">11.4 RPM</span>
        <span className="text-lime tabular-nums">CF 64%</span>
      </div>
    </div>
  );
}

export function MetoceanTelemetryCard() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-paper/90 backdrop-blur-md p-3 text-ink shadow-xl">
      <div className="flex items-center justify-between h-4">
        <p className="text-[8px] font-mono uppercase tracking-wider text-fog">Metocean</p>
        <svg className="w-3 h-3 text-lime-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M2 12c3-3 6-3 10 0s7 3 10 0M2 17c3-3 6-3 10 0s7 3 10 0" />
        </svg>
      </div>
      <div className="my-auto py-1">
        <div className="flex items-baseline justify-between">
          <p className="text-[17px] font-bold tracking-tight text-ink tabular-nums leading-none">14.2 m/s</p>
          <span className="rounded bg-lime/10 px-1.5 py-0.5 text-[7px] font-mono font-medium text-lime-deep">Gale 7</span>
        </div>
        <p className="mt-1 text-[8.5px] text-fog leading-tight">Ocean Wind Speed</p>
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 pt-1 h-4 text-[8px] text-fog font-mono">
        <span className="tabular-nums">Wave 3.2m</span>
        <span className="tabular-nums">Tide +1.1m</span>
      </div>
    </div>
  );
}

export function WakeSteeringCard() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-paper/90 backdrop-blur-md p-3 text-ink shadow-xl">
      <div className="flex items-center justify-between h-4">
        <p className="text-[8px] font-mono uppercase tracking-wider text-fog">Wake Steering</p>
        <span className="rounded bg-lime/10 px-1.5 py-0.5 text-[7px] font-mono font-semibold text-lime-deep tabular-nums">+5.4%</span>
      </div>
      <div className="my-auto py-1">
        <p className="text-[17px] font-bold tracking-tight text-ink tabular-nums leading-none">Yaw +4.2°</p>
        <p className="mt-1 text-[8.5px] text-fog leading-tight">Wake Deflection</p>
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 pt-1 h-4 text-[8px] text-fog font-mono">
        <span>Array Row 02</span>
        <span className="text-lime-deep font-medium">Active</span>
      </div>
    </div>
  );
}

export function SubseaGridCard() {
  const bars = [40, 55, 65, 80, 85, 95];
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-paper/90 backdrop-blur-md p-3 text-ink shadow-xl">
      <div className="flex items-center justify-between h-4">
        <p className="text-[8px] font-mono uppercase tracking-wider text-fog">Subsea HVDC</p>
        <span className="font-mono text-[8px] font-semibold text-lime-deep tabular-nums">525 kV</span>
      </div>
      <div className="my-auto py-1 flex items-end gap-1.5 h-6">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`w-full rounded-sm transition-all ${i === bars.length - 1 ? "bg-lime" : "bg-slate-200"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 pt-1 h-4 text-[8px] text-fog font-mono">
        <span className="text-lime-deep font-medium tabular-nums">99.98% Uptime</span>
        <span className="tabular-nums">Loss &lt;2%</span>
      </div>
    </div>
  );
}

export function AeroBladeCard() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-ink-soft p-3 text-white shadow-xl">
      <div className="flex items-center justify-between h-4">
        <span className="text-[8px] font-mono uppercase tracking-wider text-slate-400">Aero-126X</span>
        <svg className="w-3 h-3 text-lime" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L3 14h8l-1 8 11-13h-8l1-7z" />
        </svg>
      </div>
      <div className="my-auto py-1">
        <p className="text-[17px] font-bold text-white tabular-nums leading-none">126.4 m</p>
        <p className="mt-1 text-[8.5px] text-slate-400 leading-tight">Carbon Rotor Blade</p>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 pt-1 h-4 font-mono text-[8px] text-slate-300">
        <span>Bend-Twist</span>
        <span className="text-lime tabular-nums">88 m/s</span>
      </div>
    </div>
  );
}

export function StormDefenseCard() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-gradient-to-b from-lime to-lime-deep p-3 text-white shadow-xl">
      <div className="flex items-center justify-between h-4">
        <span className="text-[8px] font-mono uppercase tracking-wider text-white/80">Survivability</span>
        <svg className="w-3 h-3 text-white/80" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
        </svg>
      </div>
      <div className="my-auto py-1">
        <p className="text-[17px] font-bold leading-none tabular-nums text-white">Class T</p>
        <p className="mt-1 text-[8.5px] text-white/80 leading-tight">100-Yr Storm Rated</p>
      </div>
      <div className="flex items-center justify-between border-t border-white/15 pt-1 h-4 text-[8px] font-mono text-white/80">
        <span>Wave Dampening</span>
        <span className="tabular-nums">-42%</span>
      </div>
    </div>
  );
}

export function FloatingPlatformCard() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-ink-soft p-3 text-white shadow-xl">
      <div className="flex items-center justify-between h-4">
        <span className="text-[8px] font-mono uppercase tracking-wider text-slate-400">Depth 180m</span>
        <span className="rounded bg-lime/20 px-1.5 py-0.5 text-[7px] font-mono font-semibold text-lime">SPAR</span>
      </div>
      <div className="my-auto py-1">
        <p className="text-[17px] font-bold leading-none tabular-nums text-white">Semi-Sub</p>
        <p className="mt-1 text-[8.5px] text-slate-400 leading-tight">Tri-Column Hull</p>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 pt-1 h-4 font-mono text-[8px] text-slate-300">
        <span>Synthetic</span>
        <span className="text-lime tabular-nums">4.8 MN</span>
      </div>
    </div>
  );
}

export function PowerDispatchCard() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl bg-paper/90 backdrop-blur-md p-3 text-ink shadow-xl">
      <div className="flex items-center justify-between h-4">
        <span className="text-[8px] font-mono uppercase tracking-wider text-fog">Grid Output</span>
        <span className="rounded bg-lime/10 px-1.5 py-0.5 text-[7px] font-mono font-medium text-lime-deep">Live</span>
      </div>
      <div className="my-auto py-1">
        <p className="text-[17px] font-bold tracking-tight text-ink tabular-nums leading-none">4,850 MW</p>
        <p className="mt-1 text-[8.5px] text-fog leading-tight">Substation Landfall</p>
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 pt-1 h-4 text-[8px] text-fog font-mono">
        <span className="tabular-nums">CO₂ -12.4kt</span>
        <span className="text-lime-deep font-semibold tabular-nums">50.0 Hz</span>
      </div>
    </div>
  );
}

export const mockCards = [
  TurbineCapacityCard,
  MetoceanTelemetryCard,
  WakeSteeringCard,
  SubseaGridCard,
  AeroBladeCard,
  StormDefenseCard,
  FloatingPlatformCard,
  PowerDispatchCard,
];
