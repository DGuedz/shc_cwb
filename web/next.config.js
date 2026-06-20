/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignorar erros de TypeScript durante o build para demo
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignorar erros de ESLint durante o build para demo
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;