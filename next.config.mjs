import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  publicExcludes: ["!noprecache/**/*", "!assets/home/cancer-knowledge-machine/*.glb"],
  runtimeCaching: [
    {
      urlPattern: ({ url }) => url.origin === self.origin && url.pathname.startsWith("/api/"),
      handler: "NetworkOnly",
      method: "GET",
      options: {
        cacheName: "studymaster-api-network-only",
      },
    },
    {
      urlPattern: ({ request, url }) => url.origin === self.origin && request.mode === "navigate",
      handler: "NetworkFirst",
      options: {
        cacheName: "studymaster-pages",
        expiration: {
          maxEntries: 16,
          maxAgeSeconds: 24 * 60 * 60,
        },
        networkTimeoutSeconds: 4,
      },
    },
    {
      urlPattern: ({ url }) => url.origin === self.origin && !url.pathname.startsWith("/api/"),
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "studymaster-static-assets",
        expiration: {
          maxEntries: 96,
          maxAgeSeconds: 24 * 60 * 60 * 7,
        },
      },
    },
  ],
});

const nextConfig = {
  devIndicators: false,
  turbopack: {},
};

export default withPWA(nextConfig);
