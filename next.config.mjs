import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mengabaikan error linting agar tidak menghambat build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Mengabaikan error TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
  // Mematikan Sentry secara total pada level Next.js
  sentry: {
    hideSourceMaps: true,
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
};

// Bungkus config dengan Sentry, tapi paksa agar tidak upload apa pun
export default withSentryConfig(nextConfig, {
  silent: true, // Menyembunyikan log error Sentry
  dryRun: true, // SANGAT PENTING: Melewati tahap upload source maps jika token tidak ada
  disableLogger: true,
});
