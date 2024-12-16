/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  output: 'standalone',
      //images: {
      //        remotePatterns: [
      //                {
      //                        protocol: 'http',
      //                        hostname: 'localhost',
      //                }
      //        ],
      //},
};

module.exports = nextConfig