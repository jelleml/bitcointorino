const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Short links. These run before the next-intl middleware, so they are not
  // locale-prefixed and stay stable if the destination ever changes.
  async redirects() {
    return [
      {
        source: '/soci',
        destination:
          'https://francescopelle.notion.site/Onboarding-390e7b9b4ddd80e5a004f33b19659e0a',
        permanent: false,
      },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
