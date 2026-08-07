/* Coded recreations of the floating UI mockup cards from the original
   Framer hero carousels — real DOM, not flattened images. */

const pill = "rounded-full bg-mist px-2 py-0.5 text-[8px] font-medium text-ink";

export function ExpertiseCard() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-1  bg-ink p-3 text-[11px] leading-snug text-white">
      <p>
        Expertise{" "}
        <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-lime align-middle text-[7px] text-ink">
          ●
        </span>{" "}
        <span className="text-white/50">that</span>
      </p>
      <p className="text-white/50">
        Combines <span className="text-white">Strategy,</span>
      </p>
      <p>
        Data, <span className="text-white/50">and</span> Artificial
      </p>
      <p>Intelligence</p>
    </div>
  );
}

export function ExpenseCard() {
  const rows = [
    { name: "Vit premium", date: "November 18, 2025", amount: "$300" },
    { name: "Vit premium", date: "November 15, 2025", amount: "$150" },
    { name: "Vit premium", date: "November 14, 2025", amount: "$120" },
  ];
  return (
    <div className="flex h-full w-full flex-col gap-2  bg-white p-3 text-ink">
      <p className="text-[8px] text-fog">Monthly expanse</p>
      <p className="text-[15px] font-semibold tracking-tight">
        $4,900 <span className="font-normal text-fog">/ $10,000</span>
      </p>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-mist">
        <div className="h-full w-1/2 rounded-full bg-sky-400" />
      </div>
      <div className="mt-1 flex flex-col gap-1.5">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-mist text-[7px]">✦</span>
            <div className="flex-1">
              <p className="text-[8px] font-semibold leading-tight">{r.name}</p>
              <p className="text-[6.5px] text-fog">{r.date}</p>
            </div>
            <p className="text-[8px] font-semibold">{r.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PerformanceCard() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white text-ink">
      <div className="bg-ink p-2.5 text-white">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-semibold">Performance</p>
          <span className="text-[8px]">↗</span>
        </div>
        <p className="text-[6.5px] text-white/60">In the past 7 days</p>
      </div>
      <div className="flex flex-1 flex-col justify-between p-2.5">
        <p className="text-[20px] font-semibold tracking-tight">
          49% <span className="rounded bg-lime px-1 py-0.5 align-middle text-[6.5px] font-bold">+14%</span>
        </p>
        <p className="text-[6.5px] text-fog">Business growth</p>
        <div className="mt-1 flex flex-wrap gap-1">
          {["Strategic", "AI-Focused", "Grow Faster", "Build Smart"].map((t) => (
            <span key={t} className={pill}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ChartCard() {
  const bars = [22, 30, 26, 38, 34, 48, 62];
  const years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
  return (
    <div className="flex h-full w-full flex-col  bg-white p-3 text-ink">
      <p className="text-[11px] font-semibold leading-tight">
        Intelligence in
        <br />
        Every Decision
      </p>
      <div className="mt-auto flex items-end gap-1.5" style={{ height: "55%" }}>
        {bars.map((h, i) => (
          <div
            key={i}
            className={`w-full rounded-sm ${i === bars.length - 1 ? "bg-sky-400" : "bg-mist"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-1.5 flex justify-between">
        {years.map((y) => (
          <span key={y} className="text-[5px] text-fog">
            {y}
          </span>
        ))}
      </div>
    </div>
  );
}

export function DataPointsCard() {
  return (
    <div className="flex h-full w-full flex-col justify-between  bg-white p-3 text-ink">
      <div className="flex flex-wrap gap-1">
        {["Professional", "Strategic", "AI-Focused", "Smarter", "Grow Faster"].map((t) => (
          <span key={t} className={pill}>
            {t}
          </span>
        ))}
      </div>
      <div>
        <p className="text-[8px] text-fog">Data Points</p>
        <p className="text-[24px] font-semibold tracking-tight">520k+</p>
      </div>
    </div>
  );
}

export function DataTrainingCard() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2  bg-gradient-to-b from-sky-300 to-sky-500 p-3 text-white">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/25 text-lg backdrop-blur-sm">
        +
      </span>
      <p className="text-[12px] font-semibold">Data training</p>
      <p className="-mt-1.5 text-[7.5px] text-white/80">Upload your content</p>
    </div>
  );
}

export function CalendarCard() {
  return (
    <div className="relative h-full w-full overflow-hidden  bg-gradient-to-br from-sky-200 via-sky-300 to-emerald-200 p-3">
      <div className="absolute left-3 top-4 flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow">
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sky-400 text-[6px] text-white">
          ●
        </span>
        <span className="text-[7.5px] font-medium text-ink">Calendar</span>
        <span className="rounded-full bg-lime px-1 text-[5.5px] font-bold text-ink">Live</span>
      </div>
      <div className="absolute bottom-5 right-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow">
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sky-500 text-[6px] text-white">
          ●
        </span>
        <span className="text-[7.5px] font-medium text-ink">Messages</span>
        <span className="rounded-full bg-lime px-1 text-[5.5px] font-bold text-ink">Live</span>
      </div>
    </div>
  );
}

export function IncomeCard() {
  return (
    <div className="flex h-full w-full flex-col justify-end  bg-gradient-to-b from-emerald-200 to-emerald-400 p-2.5">
      <div className="rounded-lg bg-white p-2 text-ink shadow">
        <div className="flex justify-between gap-2">
          <div>
            <p className="text-[6.5px] text-fog">
              Income <span className="rounded bg-lime px-0.5 text-[5.5px] font-bold text-ink">+12%</span>
            </p>
            <p className="text-[10px] font-semibold">$2,670</p>
          </div>
          <div>
            <p className="text-[6.5px] text-fog">Expanse</p>
            <p className="text-[10px] font-semibold">$1,200</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const mockCards = [
  ExpertiseCard,
  ExpenseCard,
  PerformanceCard,
  ChartCard,
  DataPointsCard,
  DataTrainingCard,
  CalendarCard,
  IncomeCard,
];
