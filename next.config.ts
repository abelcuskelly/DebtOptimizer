import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from a subdirectory, so we need to set the base path
  // Remove this line if you're using a custom domain
  basePath: process.env.NODE_ENV === 'production' ? '/DebtOptimizer' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/DebtOptimizer/' : '',
};

export default nextConfig;
