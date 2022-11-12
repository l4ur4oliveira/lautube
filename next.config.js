/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    supabaseKey: process.env.SUPABASE_KEY,
  },
}

module.exports = nextConfig
