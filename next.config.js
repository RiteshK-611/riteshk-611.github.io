/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  loader: 'akamai',
  path: '',
  images: {
    domains: ['github.com'],
  }
}