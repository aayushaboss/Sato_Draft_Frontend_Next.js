import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-bricolage",
  display: "swap",
});

// Japanese fonts are served by Google's CDN as hundreds of unicode-range slices,
// which next/font can't reliably self-host, so they load from the stylesheet instead.
const cjkFonts =
  "https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Shippori+Mincho:wght@500;700&display=swap";

export const metadata: Metadata = {
  title: "SATO Ramen Bowl",
  description: "Japanese tradition meets Indian warmth. Find your nearest SATO.",
  icons: { icon: "/assets/logo-mark.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={cjkFonts} />
      </head>
      <body>
        {children}
        <noscript>
          <style>{`[data-r]{opacity:1;transform:none}`}</style>
        </noscript>
      </body>
    </html>
  );
}
