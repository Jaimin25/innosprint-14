/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'geauction.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
