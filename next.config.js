/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    loader: 'imgix',
    path: '',
    domains: ['github.com'],
  }
}