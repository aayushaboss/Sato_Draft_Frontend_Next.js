import type { CSSProperties } from "react";

type Props = {
  label: string;
  tone?: "dark" | "light";
  className?: string;
  /** Overrides the striped background of the parallax layer. */
  background?: string;
  reveal?: boolean;
  children?: React.ReactNode;
  style?: CSSProperties;
};

/** Striped image placeholder with a parallax inner layer (driven by MotionController). */
export default function Placeholder({ label, tone = "dark", className = "", background, reveal, children, style }: Props) {
  return (
    <div data-par="" data-r={reveal ? "" : undefined} className={`par ${className}`} style={style}>
      <div data-par-in="" className={`par-in ${background ? "" : tone}`} style={background ? { background } : undefined}>
        <span className="ph-label">{label}</span>
      </div>
      {children}
    </div>
  );
}
