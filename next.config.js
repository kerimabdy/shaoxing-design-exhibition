/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  images: {
    loader: 'custom',
    loaderFile: '/src/widgets/loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.tina.io ',
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
