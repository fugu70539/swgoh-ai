/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'game-assets.swgoh.gg',
      },
    ],
  },
};

export default nextConfig;
