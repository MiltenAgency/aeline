import Link from "next/link";

const base =
  "group inline-flex items-center gap-2 rounded-full py-2 pl-5 pr-2 font-sans text-xs font-bold uppercase tracking-wider transition-transform hover:scale-[1.03]";

const styles = {
  primary: { btn: `${base} bg-lime text-ink`, circle: "flex h-7 w-7 items-center justify-center rounded-full bg-ink text-lime" },
  dark: { btn: `${base} bg-ink text-white`, circle: "flex h-7 w-7 items-center justify-center rounded-full bg-lime text-ink" },
  outline: {
    btn: `${base} border border-line bg-paper text-ink`,
    circle: "flex h-7 w-7 items-center justify-center rounded-full bg-mist text-ink",
  },
  glass: {
    btn: `${base} bg-white/10 border border-white/20 text-white backdrop-blur-sm px-6 py-3`,
    circle: "hidden",
  },
} as const;

export function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: keyof typeof styles;
  children: React.ReactNode;
}) {
  const s = styles[variant];
  return (
    <Link href={href} className={s.btn}>
      {children}
      {s.circle !== "hidden" && (
        <span
          className={`transition-transform group-hover:rotate-45 ${s.circle}`}
          aria-hidden
        >
          ↗
        </span>
      )}
    </Link>
  );
}

