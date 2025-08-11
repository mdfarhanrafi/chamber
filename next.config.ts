import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ["res.cloudinary.com"], // Add Cloudinary here
  },
  eslint: {
    ignoreDuringBuilds: true, // 🚀 Skip ESLint errors during build/deploy
  },

};

export default nextConfig;
