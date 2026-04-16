/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',   // ✅ ADD THIS

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
}

module.exports = nextConfig