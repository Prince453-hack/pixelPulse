/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ["wallpapers.com", "lh3.googleusercontent.com"],
  },
};
