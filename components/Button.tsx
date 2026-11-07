import Link from "next/link";

const base =
  "group inline-flex items-center gap-2 rounded-full py-2.5 pl-6 pr-2.5 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.03]";

const styles = {
  primary: {
    btn: `${base} bg-lime hover:bg-lime-deep text-white shadow-md`,
    circle: "flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white",
  },
  white: {
    btn: `${base} bg-white hover:bg-slate-100 text-[#03071e] shadow-md`,
    circle: "flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[#03071e] group-hover:bg-slate-200",
  },
  dark: {
    btn: `${base} bg-ink hover:bg-ink-soft text-white shadow-md`,
    circle: "flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white",
  },
  outline: {
    btn: `${base} border-2 border-lime text-lime hover:bg-lime hover:text-white bg-transparent`,
    circle: "flex h-7 w-7 items-center justify-center rounded-full bg-lime/15 text-lime group-hover:bg-white/20 group-hover:text-white",
  },
  glass: {
    btn: `${base} bg-white/20 hover:bg-white/30 backdrop-blur-md text-white shadow-md`,
    circle: "flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white",
  },
};

export function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: keyof typeof styles;
  children: React.ReactNode;
}) {
  const s = styles[variant] || styles.primary;
  return (
    <Link href={href} className={s.btn}>
      {children}
      {Boolean(s.circle) && (
        <span
          className={`transition-transform duration-200 group-hover:rotate-45 ${s.circle}`}
          aria-hidden
        >
          ↗
        </span>
      )}
    </Link>
  );
}
