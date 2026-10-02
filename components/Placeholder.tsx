import Image from "next/image";
import type { CSSProperties } from "react";

type Props = {
  label: string;
  tone?: "dark" | "light";
  className?: string;
  /** Overrides the striped background of the parallax layer. */
  background?: string;
  /** Real image for the parallax layer; `label` becomes its alt text. */
  src?: string;
  sizes?: string;
  quality?: number;
  reveal?: boolean;
  children?: React.ReactNode;
  style?: CSSProperties;
};

/** Image block with a parallax inner layer (driven by MotionController); striped placeholder until `src` is set. */
export default function Placeholder({ label, tone = "dark", className = "", background, src, sizes = "100vw", quality, reveal, children, style }: Props) {
  return (
    <div data-par="" data-r={reveal ? "" : undefined} className={`par ${className}`} style={style}>
      <div data-par-in="" className={`par-in ${background || src ? "" : tone}`} style={background ? { background } : undefined}>
        {src ? <Image src={src} alt={label} fill sizes={sizes} quality={quality} className="par-img" /> : <span className="ph-label">{label}</span>}
      </div>
      {children}
    </div>
  );
}
