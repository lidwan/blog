import redirects from "./lib/redirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return Object.entries(redirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
