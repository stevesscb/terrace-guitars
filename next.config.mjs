/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['next-transpile-modules'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
