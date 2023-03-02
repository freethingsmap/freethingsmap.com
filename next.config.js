/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cataas.com', 'us1-photo.nextdoor.com'],
        formats: ['image/avif', 'image/webp'],
    }
}

module.exports = nextConfig