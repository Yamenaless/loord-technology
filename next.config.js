/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose'
  },
  transpilePackages: ['lucide-react'],
  staticPageGenerationTimeout: 120
}

module.exports = nextConfig
