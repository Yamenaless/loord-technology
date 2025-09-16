/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose'
  },
  transpilePackages: ['lucide-react'],
  staticPageGenerationTimeout: 120,
  output: 'standalone'
}

module.exports = nextConfig
