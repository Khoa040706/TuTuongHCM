/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      // Cache page navigations
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "studymaster-pages",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60 * 7, // 7 days
        },
        networkTimeoutSeconds: 10,
      },
    },
  ],
});

const nextConfig = {
  devIndicators: false,
  turbopack: {},
};

module.exports = withPWA(nextConfig);
