/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath:'',
  
  
}

// module.exports = nextConfig

module.exports = {
  images: {
    domains: ['localhost','res.cloudinary.com'],
  },
},nextConfig