import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is used for the Instagram reel covers, which carry text overlays that blur at 75.
    qualities: [75, 90],
  },
};

export default nextConfig;
