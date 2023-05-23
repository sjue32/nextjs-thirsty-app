/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['thecocktaildb.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.thecocktaildb.com',
        port: '',
        pathname: '/images/media/drink/**',
      },
    ],
  },
};

module.exports = nextConfig
