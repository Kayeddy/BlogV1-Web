/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GRAPHCMS_ENDPOINT : process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
    
  },
}
